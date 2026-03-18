INSERT INTO authors (name, email, bio) VALUES
('Luna Gomez', 'luna@miniblog.dev', 'Backend developer junior en DevSpark, trabajando en la API de MiniBlog'),
('Miguel Rincon', 'miguel@miniblog.dev', 'Desarrollador enfocad en bases de datos y servicios backend'),
('Nicolle Moreno', 'nicolle@miniblog.dev', 'Desarrolladora frontend interesada en integrar la API de MiniBlog');

INSERT INTO posts (title, content, author_id, published) VALUES
('Primer avance de la API de MiniBlog', 'Hoy dejamos lista la estructura inicial de la API REST para gestionar autores y publicaciones. El siguiente paso es conectar Express con PostgreSQL y documentar los endpoints para facilitar la integración con frontend.', 1, true),

('Decisiones iniciales del backend', 'Para esta primera versión se decidió mantener una arquitectura simple, usar consultas SQL directas con pg y evitar dependencias innecesarias. Esto permitirá que el equipo pueda entender, probar y desplegar la API con mayor facilidad.', 2, true),

('Integración del frontend con los endpoints', 'El equipo de frontend necesita endpoints claros y respuestas consistentes para conectar los prototipos visuales de MiniBlog. Por eso la documentación OpenAPI y el manejo correcto de errores son parte clave de esta entrega.', 3, true),

('Pendientes antes del deployment', 'Antes de desplegar en Railway todavía debemos completar los tests básicos, ajustar las variables de entorno y verificar que las operaciones CRUD funcionen correctamente con datos persistidos en PostgreSQL.', 1, false);