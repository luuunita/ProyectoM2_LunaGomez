const express = require("express");
const router = express.Router();

const { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } = require("../services/authors.service");

router.get("/", async (req, res, next) => {
  try {
    const authors = await getAllAuthors();
    res.json(authors);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const author = await getAuthorById(req.params.id);

    if (!author) {
      return res.status(404).json({ error: "Author no encontrado" });
    }

    res.json(author);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Name es requerido" });
    }

    if (!email || email.trim() === "") {
      return res.status(400).json({ error: "Email es requerido" });
    }

    const newAuthor = await createAuthor(name, email, bio || null);
    res.status(201).json(newAuthor);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ error: "El email ya existe" });
    }

    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, email, bio } = req.body || {};

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Name es requerido" });
    }

    if (!email || email.trim() === "") {
      return res.status(400).json({ error: "Email es requerido" });
    }

    const updatedAuthor = await updateAuthor(
      req.params.id,
      name,
      email,
      bio || null
    );

    if (!updatedAuthor) {
      return res.status(404).json({ error: "Author no encontrado" });
    }

    res.json(updatedAuthor);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ error: "El email ya existe" });
    }

    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedAuthor = await deleteAuthor(req.params.id);

    if (!deletedAuthor) {
      return res.status(404).json({ error: "Author no encontrado" });
    }

    res.json(deletedAuthor);
  } catch (error) {
    next(error);
  }
});

module.exports = router;