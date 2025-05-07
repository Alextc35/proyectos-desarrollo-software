# ✅ ToDo List con Autenticación

[![Estado del proyecto](https://img.shields.io/badge/Estado-En%20desarrollo-yellow)](https://github.com/TU_USUARIO/ToDo-List)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)](LICENSE)
[![Hecho con ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)](#)

Aplicación web de lista de tareas (**ToDo List**) con sistema de autenticación de usuarios, gestión de tareas personales y CRUD completo.

---

## ✨ Características

- Registro de usuarios
- Inicio de sesión y cierre de sesión
- Añadir, editar, eliminar y marcar tareas como completadas
- Cada usuario solo ve sus propias tareas
- Validación de formularios
- Interfaz amigable y responsiva
- Persistencia de datos en base de datos
- Protección de rutas

---

## 🚀 Tecnologías utilizadas

- **Frontend:** HTML, CSS, JavaScript (o framework si aplica)
- **Backend:** PHP / Node.js / Laravel / Express.js (dependiendo del stack)
- **Base de datos:** MySQL / MongoDB / PostgreSQL
- **Autenticación:** Sessions / JWT
- **Otros:** Bootstrap / Tailwind / Express Validator (opcional)

---

## 📦 Instalación y uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/TU_USUARIO/ToDo-List.git
   cd ToDo-List
   ```

2. Instala las dependencias (si aplica):

   ```bash
   npm install
   ```

3. Configura las variables de entorno (archivo .env):

   ```env
   PORT=3306
   DB_USER=root
   DB_PASS=
   DB_NAME=todolist_db
   SECRET_KEY=
   ```

4. Inicia el servidor:

   ```bash
   npm start
   ```

5. Abre tu navegador en `http://localhost:3000`

## 📝 Estructura del proyecto

``` arduino
ToDo-List/
├── public/
│   ├── css/
│   └── js/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── views/
├── .env
├── app.js
└── README.md
```

---

## 💡 Posibles mejoras

- Recordatorios por correo electrónico
- Filtro y búsqueda de tareas
- Categorías y etiquetas
- Interfaz dark mode
- App móvil

---

## 📷 Capturas de pantalla

*(Aquí puedes añadir capturas si las tienes)*

![Pantalla principal](./.screenshots/home.png)


## 🏗️ Contribuciones

¡Las contribuciones son bienvenidas!  
Si encuentras un error, tienes una idea de mejora o deseas aportar código, no dudes en abrir un **issue** o enviar un **pull request**.

Por favor, sigue estas recomendaciones:

1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b feature/tu-feature`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/tu-feature`).
5. Abre un pull request.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](../LICENSE) para más información.

---

## 🙌 Agradecimientos

Gracias por visitar este proyecto.  
Este proyecto es parte de mi crecimiento profesional como desarrollador de software.

[⬅️ Volver al repositorio principal](../README.md)
