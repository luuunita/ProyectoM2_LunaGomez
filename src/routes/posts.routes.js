const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  getPostsByAuthorId,
  createPost,
  updatePost,
  deletePost,
} = require("../services/posts.service");

router.get("/", async (req, res, next) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/author/:authorId", async (req, res, next) => {
  try {
    const posts = await getPostsByAuthorId(req.params.authorId);
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await getPostById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, content, author_id, published } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({
        error: "Faltan campos obligatorios",
      });
    }

    const newPost = await createPost(
      title,
      content,
      author_id,
      published ?? false
    );

    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { title, content, author_id, published } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({
        error: "Faltan campos obligatorios",
      });
    }

    const updatedPost = await updatePost(
      req.params.id,
      title,
      content,
      author_id,
      published ?? false
    );

    if (!updatedPost) {
      return res.status(404).json({
        error: "Post no encontrado",
      });
    }

    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedPost = await deletePost(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        error: "Post no encontrado",
      });
    }

    res.json({
      message: "Post eliminado correctamente",
      post: deletedPost,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;