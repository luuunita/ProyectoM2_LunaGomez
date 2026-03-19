🚀 MiniBlog API - DevSpark

API REST desarrollada en Node.js + Express para gestionar autores y publicaciones (posts).
Permite crear, consultar, actualizar y eliminar información almacenada en PostgreSQL, incluyendo validaciones y documentación interactiva.

🌐 URL de la API

API desplegada en Railway:

https://proyectom2lunagomez-production.up.railway.app
📚 Documentación interactiva (Swagger)

OpenAPI disponible en:

https://proyectom2lunagomez-production.up.railway.app/api-docs

Desde esta interfaz se pueden probar todos los endpoints directamente desde el navegador.

🛠 Tecnologías utilizadas

Node.js

Express.js

PostgreSQL

OpenAPI (Swagger)

Railway (Deployment)

Postman (Testing)

📡 Endpoints disponibles
👩‍💻 Authors
Método	Endpoint	Descripción
GET	/api/authors	Obtener todos los autores
GET	/api/authors/:id	Obtener autor por ID
POST	/api/authors	Crear un nuevo autor
PUT	/api/authors/:id	Actualizar un autor
DELETE	/api/authors/:id	Eliminar un autor
📝 Posts
Método	Endpoint	Descripción
GET	/api/posts	Obtener todos los posts
GET	/api/posts/:id	Obtener post por ID
GET	/api/posts/author/:authorId	Obtener posts por autor
POST	/api/posts	Crear un post
PUT	/api/posts/:id	Actualizar un post
DELETE	/api/posts/:id	Eliminar un post
💻 Ejemplos de uso
📌 Crear un autor
{
  "name": "Gabriel García Márquez",
  "email": "gabriel@email.com",
  "bio": "Escritor colombiano"
}
📌 Crear un post
{
  "title": "Cien años de soledad",
  "content": "Novela emblemática de la literatura latinoamericana.",
  "author_id": 1,
  "published": true
}
🚀 Deployment en Railway
1️⃣ Crear el proyecto

Ir a https://railway.app

Crear un nuevo proyecto

Conectar el repositorio de GitHub

2️⃣ Variables de entorno

Railway genera automáticamente las variables, pero debes verificar:

DATABASE_URL=
PORT=
NODE_ENV=production
3️⃣ URL pública

Railway genera una URL accesible para la API:

https://proyectom2lunagomez-production.up.railway.app
4️⃣ Deploy automático

Cada vez que haces:

git push

Railway redepliega automáticamente la aplicación.

⚙️ Instalación local
1️⃣ Clonar el repositorio
git clone https://github.com/TU-USUARIO/TU-REPO.git
2️⃣ Instalar dependencias
npm install
3️⃣ Configurar variables de entorno

Crear archivo .env:

DATABASE_URL=
PORT=3000
NODE_ENV=development
4️⃣ Ejecutar servidor
npm start

Servidor disponible en:

http://localhost:3000
🧪 Pruebas con Postman
🔹 Ejemplo GET
GET /api/authors

Respuesta:

[
  {
    "id": 1,
    "name": "Gabriel García Márquez",
    "email": "gabriel@email.com",
    "bio": "Escritor colombiano",
    "created_at": "2026-03-13T10:00:00.000Z"
  }
]
🔹 Ejemplo POST
POST /api/authors

Body:

{
  "name": "Autor prueba",
  "email": "test@email.com",
  "bio": "Autor de testing"
}
📊 Estructura de datos
Author

id (generado automáticamente)

name

email

bio

created_at

Post

id (generado automáticamente)

title

content

author_id

published

created_at
