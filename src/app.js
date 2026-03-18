const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const authorsRouter = require("./routes/authors.routes");
const postsRouter = require("./routes/posts.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

const openApiPath = path.join(__dirname, "docs", "openapi.yaml");
const swaggerDocument = YAML.load(openApiPath);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json({
    message: "MiniBlog API funcionando",
    endpoints: {
      authors: "/api/authors",
      posts: "/api/posts",
      docs: "/api-docs"
    }
  });
});

app.use("/api/authors", authorsRouter);
app.use("/api/posts", postsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use(errorHandler);

module.exports = app;