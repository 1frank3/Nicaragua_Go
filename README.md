# Memoria Viva Nicaragua  Nicaraguan flag

*Una plataforma digital para la preservación y difusión del patrimonio cultural nicaragüense.*

---

## 🎯 Acerca del Proyecto

**Memoria Viva Nicaragua** es una aplicación educativa diseñada para preservar, registrar y compartir los saberes populares, culturales y tradiciones de nuestro pueblo. La plataforma involucra activamente a familias y comunidades como protagonistas, garantizando que el patrimonio histórico llegue a las nuevas generaciones.

Este proyecto fue desarrollado como parte del **Hackathon Nicaragua 2025** en la categoría Aficionado, respondiendo a la temática de **Educación**.

### ✨ Funcionalidades Principales

* **Publicación Colaborativa:** Permite a los usuarios subir relatos comunitarios en formato de imagen, texto, audio o video.
* **Mapa Interactivo:** Visualiza las memorias geolocalizadas por barrio, municipio o comunidad.
* **Calendario Cultural:** Muestra eventos tradicionales, ferias y festividades importantes.
* **Biblioteca de Saberes:** Un espacio colaborativo para consultar recetas, costumbres y tradiciones populares.
* **Módulo de Juegos:** Incluye retos y juegos didácticos para aprender sobre identidad y valores patrios.

---

## 🛠️ Stack Tecnológico

Este proyecto fue construido utilizando una arquitectura moderna de aplicación de página única (SPA) con un backend dedicado.

* **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Backend:** [Laravel](https://laravel.com/)
* **Base de Datos:** MySQL (o la base de datos configurada en Laravel)
* **Manejo de Formularios:** [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)

---

## 🚀 Instalación y Ejecución

Para levantar este proyecto en tu entorno local, sigue estos sencillos pasos.

### Pre-requisitos

Asegúrate de tener instalado lo siguiente en tu sistema:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/) (v18 o superior)
* [Composer](https://getcomposer.org/)
* Un servidor de base de datos local (ej. XAMPP, Laragon, etc.)

### Guía de Instalación

1.  **Clona el repositorio**
    ```bash
    git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
    cd TU_REPOSITORIO
    ```

2.  **Configura el Backend (Laravel)**
    ```bash
    # Navega a la carpeta del backend
    cd backend

    # Instala las dependencias de PHP
    composer install

    # Copia el archivo de variables de entorno
    cp .env.example .env

    # Genera la llave de la aplicación
    php artisan key:generate

    # Abre el archivo .env y configura tu conexión a la base de datos (DB_DATABASE, DB_USERNAME, DB_PASSWORD)

    # Ejecuta las migraciones para crear las tablas en la base de datos
    php artisan migrate
    ```

3.  **Configura el Frontend (React)**
    ```bash
    # Vuelve a la raíz del proyecto y navega a la carpeta del frontend
    cd ../frontend

    # Instala las dependencias de Node.js
    npm install
    ```

### Ejecución del Proyecto

Debes tener dos terminales abiertas para ejecutar el backend y el frontend simultáneamente.

1.  **Ejecuta el servidor del Backend**
    ```bash
    # Desde la carpeta /backend
    php artisan serve
    ```
    > El API de Laravel estará disponible en `http://127.0.0.1:8000`

2.  **Ejecuta el servidor del Frontend**
    ```bash
    # Desde la carpeta /frontend
    npm run dev
    ```
    > La aplicación de React estará visible en `http://localhost:5173` (o el puerto que indique Vite).

¡Y listo! Ahora puedes abrir tu navegador y empezar a explorar Memoria Viva Nicaragua.