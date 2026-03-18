const request = require("supertest");
const app = require("../src/app");

describe("Posts endpoints", () => {
  test("GET /api/posts responde 200", async () => {
    const response = await request(app).get("/api/posts");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /api/posts/9999 responde 404 si no existe", async () => {
    const response = await request(app).get("/api/posts/9999");

    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("error");
  });

  test("POST /api/posts crea un post", async () => {
    const response = await request(app)
      .post("/api/posts")
      .send({
        title: "Post de prueba",
        content: "Contenido creado desde un test automático",
        author_id: 1,
        published: true,
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Post de prueba");
  });
});