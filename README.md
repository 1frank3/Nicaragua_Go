# Memoria Viva Nicaragua 🇳🇮

Una plataforma web educativa y colaborativa diseñada para preservar, registrar y compartir los saberes populares, culturales y tradiciones de Nicaragua. Este proyecto es un entregable para el Hackathon Nicaragua 2025.

Para evaluar el proyecto entregado **solo es necesario ejecutar el Frontend**, ya que utiliza datos de ejemplo (mocks) para demostrar todas las funcionalidades implementadas.

---

## 🎯 Propósito del Proyecto

"Nicaragua Go" nace como respuesta al reto de **Educación** en la categoría Aficionado. La misión es crear una herramienta digital que involucre activamente a las comunidades en la documentación de su propia historia. Al conectar el pasado con el presente a través de la tecnología, la plataforma fomenta una apreciación más profunda de la herencia nicaragüense, asegurando que el patrimonio cultural llegue a las nuevas generaciones.

---

## ✨ Funcionalidades Principales

La aplicación cuenta con **5 módulos principales** diseñados para una experiencia completa e interactiva:

1.  **Biblioteca Cultural:** Un sistema robusto que permite a los usuarios explorar la base de datos de historias. Incluye un triple sistema de filtros por ciudad, categoría y búsqueda de texto.
2.  **Mapa Interactivo:** Utilizando Mapbox, las historias geolocalizadas se muestran como pines en un mapa de Nicaragua, permitiendo una exploración visual.
3.  **Plataforma de Colaboración:** Un formulario intuitivo que permite a los usuarios subir sus propias memorias en formato de texto, imagen, audio o video.
4.  **Calendario de Eventos:** Un calendario cultural que muestra las festividades, ferias y eventos tradicionales de Nicaragua, construido con FullCalendar.
5.  **Juegos Interactivos:** Una sección didáctica para aprender sobre la identidad nicaragüense, que incluye:
    * Un **Quiz** de conocimiento sobre cultura e historia.
    * Un juego de memoria de **"Voltea y encuentra el par"** con figuras culturales.

---

## 🛠️ Stack Tecnológico

La aplicación se construyó utilizando un stack moderno, separando las responsabilidades entre el frontend y el backend.

### **Frontend**
* **Framework:** React 19 + Vite
* **Estilos:** Tailwind CSS
* **Componentes UI:** Flowbite React
* **Enrutamiento:** React Router DOM
* **Manejo de Formularios:** Formik & Yup
* **Mapas:** Mapbox GL & `react-map-gl`
* **Carrusel:** `react-slick` & `slick-carousel`
* **Calendario:** FullCalendar
* **Peticiones HTTP:** Axios
* **Íconos:** `react-icons`

### **Backend**
* **Framework:** Laravel
* **Base de Datos:** MySQL

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

### **Pre-requisitos**
* Node.js (v18+)
* NPM
* Composer
* PHP (v8.1+)
* Git

### **Guía de Instalación**

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/1frank3/memoria_viva.git]
    cd TU_REPOSITORIO
    ```
   ***Nota: La parte del backend aún está en desarrollo y no es necesaria para ejecutar la demostración del frontend.***
2.  **Configura el Backend (Laravel):**
    ```bash
    # Entra a la carpeta del backend
    cd backend

    # Instala las dependencias de PHP
    composer install

    # Crea tu archivo de variables de entorno
    cp .env.example .env

    # Genera la llave de la aplicación
    php artisan key:generate

    # Abre el archivo .env y configura tu base de datos (DB_DATABASE, DB_USERNAME, DB_PASSWORD)

    # Ejecuta las migraciones para crear las tablas
    php artisan migrate
    ```

3.  **Configura el Frontend (React):**
    ```bash
    # Vuelve a la raíz y entra a la carpeta del frontend
    cd ../frontend

    # Instala las dependencias de JavaScript
    npm install
    ```

### **Ejecución**

Necesitarás dos terminales para correr ambos servidores simultáneamente.

1.  **Terminal 1 (Backend):**
    ```bash
    # Desde la carpeta /backend
    php artisan serve
    ```
    *El API estará disponible en `http://127.0.0.1:8000`.*

2.  **Terminal 2 (Frontend):**
    ```bash
    # Desde la carpeta /frontend
    npm run dev
    ```
    *La aplicación será visible en `http://localhost:5173` (o el puerto que indique Vite).*

---

## 👥 Autores

* [Santos Rafael Toruño Rueda]*
* [Gerald Francisco Mercado Padilla]