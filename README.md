<div align="center">

# 🚜 AgroFlet — Landing Page Oficial

**Digitalizando la trazabilidad del transporte agrícola en Perú**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<p align="center">
  Plataforma tecnológica diseñada para transformar la cadena logística agraria en el Perú, conectando productores, transportistas y compradores mayoristas con trazabilidad GPS en tiempo real, contratos digitales y reducción de mermas post-cosecha.
</p>


</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Uso Local](#-instalación-y-uso-local)
- [Internacionalización (i18n)](#-internacionalización-i18n)
- [Diseño y Buenas Prácticas](#-diseño-y-buenas-prácticas)
- [Equipo Fundador](#-equipo-fundador)
- [Licencia](#-licencia)

---

## 🌾 Acerca del Proyecto

En el Perú, gran parte de los productos agrícolas sufre pérdidas significativas durante el transporte debido a la falta de información oportuna, desarticulación entre los actores de la cadena y deficiencias en el seguimiento de las unidades de carga.

**AgroFlet** resuelve esta problemática mediante:

- **Trazabilidad en tiempo real:** Geolocalización continua de la carga desde el campo hasta los mercados mayoristas (ej. Gran Mercado Mayorista de Lima - Santa Anita).
- **Contratos Digitales Verificables:** Formalización rápida y segura de acuerdos de transporte entre productores y fletistas.
- **Reducción de Pérdidas:** Alertas tempranas de demoras, temperatura y contingencias viales que disminuyen hasta un 40% las mermas.
- **Transparencia y Calificación:** Sistema de reputación bidireccional que construye una red de confianza para el agro nacional.

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura limpia (*clean code*), modular y desacoplada, organizada en carpetas de fácil mantenimiento:

```
AGROFLET/
├── assets/
│   ├── css/
│   │   └── styles.css          # Sistema de diseño, tokens, layouts y componentes
│   ├── i18n/
│   │   ├── es.json             # Diccionario de traducción en Español
│   │   └── en.json             # Diccionario de traducción en Inglés
│   ├── js/
│   │   └── app.js              # Lógica de interactividad, validaciones, i18n y carrusel
│   └── images/
│       ├── logo.jpg            # Identidad visual y logotipo oficial
│       └── team/               # Fotografías de los integrantes del equipo
│           ├── adriano.jpg
│           ├── bernie.jpg
│           ├── cesar.jpg
│           ├── christoper.jpg
│           └── jose.jpg
├── docs/
│   └── terms-and-conditions.html # Términos y condiciones del servicio legal
├── .editorconfig               # Configuración consistente de formato para editores
├── .gitignore                  # Exclusión de archivos y temporales en Git
├── .nojekyll                   # Compatibilidad directa para despliegue en GitHub Pages
├── index.html                  # Landing page principal semántica y accesible
├── LICENSE                     # Licencia MIT de código abierto
└── README.md                   # Documentación técnica completa del proyecto
```

---

## ✨ Características Principales

### 1. Sistema Multilingüe (i18n ES / EN)
- Cambio dinámico e instantáneo de idioma entre Español e Inglés sin recargar la página.
- Persistencia automática de la preferencia del usuario en `localStorage` (`agroflet_lang`).
- Traducción integral: textos estáticos, modales, placeholders de formularios, opciones de selección y mensajes de error.

### 2. Carrusel de Testimonios Avanzado
- Soporte para **gestos táctiles (*swipe*)** en dispositivos móviles y tabletas.
- Arrastre con mouse (*drag-and-drop*) en navegadores de escritorio.
- Rotación automática con pausa en interacción (*hover* / toque).
- Indicadores interactivos (*dots*) y botones de navegación circular infinita.

### 3. Modales Interactivos
- **Modal de Autenticación:** Formularios reactivos para Iniciar Sesión y Registro con validación en tiempo real y medidor de seguridad de contraseña.
- **Modal de Video:** Reproductor embebido con reproducción automática y corte inmediato de audio/video al cerrar.
- **Modal de Documentos Legales y FAQ:** Visualización de Términos de Uso, Políticas de Privacidad y Preguntas Frecuentes.

### 4. Animaciones y Experiencia Visual (Glassmorphism & 3D Tilt)
- Efecto de desenfoque esmerilado con compatibilidad multi-navegador (`-webkit-backdrop-filter` para Safari e iOS).
- Micro-interacciones con efecto 3D Tilt activado exclusivamente en dispositivos que admiten cursor hover.
- Contadores numéricos estadísticos animados con `IntersectionObserver`.
- Partículas dinámicas en el Hero con optimización de consumo de recursos.

---

## 🛠 Tecnologías Utilizadas

- **HTML5 Semántico:** Estructuración accesible (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 Puro (Vanilla CSS):**
  - Variables CSS (Custom Properties) para tokens de color, espaciados y tipografía.
  - CSS Grid y Flexbox para maquetación responsiva (*Mobile First*).
  - Animaciones nativas a 60fps aceleradas por GPU.
- **JavaScript Moderno (ES6+):**
  - Manipulación reactiva del DOM sin dependencias externas.
  - `IntersectionObserver` para carga diferida y animaciones al hacer scroll.
  - `localStorage` para almacenamiento de preferencias y simulación de sesión de usuario.

---

## 🚀 Instalación y Uso Local

Para ejecutar el proyecto en tu entorno local no se requieren compiladores ni dependencias pesadas:

### Opción 1: Visualización directa
1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/agroflet.git
   ```
2. Abre el archivo `index.html` directamente en tu navegador web de preferencia (Chrome, Edge, Firefox, Safari).

### Opción 2: Servidor local (Recomendado para desarrollo)
Utilizando una extensión como **Live Server** en VS Code o mediante Python / Node:

```bash
# Con Python 3
python -m http.server 8000

# Con Node (npx)
npx serve .
```
Luego ingresa a `http://localhost:8000` en tu navegador.

---

## 👥 Equipo Fundador

AgroFlet fue conceptualizado y desarrollado por un equipo multidisciplinario:

| Nombre | Rol | Especialidad |
| :--- | :--- | :--- |
| **César Alca** | Full-Stack Developer | Arquitectura de software, Frontend e integraciones |
| **Adriano Centeno** | Backend Engineer | APIs, base de datos y lógica de negocio |
| **Bernie Rivas** | UX/UI Designer | Diseño de interfaces, sistemas de diseño y experiencia |
| **Christoper Rivas** | Mobile Developer | Desarrollo de aplicaciones móviles y geolocalización |
| **Jose Tello** | DevOps & Cloud | Infraestructura en la nube, seguridad y despliegue |

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

<div align="center">
  <small>© 2026 AgroFlet. Todos los derechos reservados. Hecho con ❤️ para el agro peruano.</small>
</div>
