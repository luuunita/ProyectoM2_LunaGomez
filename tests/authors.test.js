const request = require("supertest");
const app = require("../src/app");

describe("Authors endpoints", () => {
  test("GET /api/authors responde 200", async () => {
    const response = await request(app).get("/api/authors");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /api/authors/9999 responde 404 si no existe", async () => {
    const response = await request(app).get("/api/authors/9999");

    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("error");
  });

  test("POST /api/authors crea un autor", async () => {
    const uniqueEmail = `test${Date.now()}@miniblog.dev`;

    const response = await request(app)
      .post("/api/authors")
      .send({
        name: "Autor Test",
        email: uniqueEmail,
        bio: "Autor creado desde test",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Autor Test");
    expect(response.body.email).toBe(uniqueEmail);
  });
});