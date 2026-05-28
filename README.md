# III Simposio Internacional — Desarrollo e Innovación Empresarial
> **Plataforma Web Oficial del Encuentro de Innovación y Creadores de Futuro**

[![Astro](https://img.shields.io/badge/Astro-5.0.0-ff5e00?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ed?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Automated-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

Bienvenido a la plataforma web del **III Simposio Internacional - Desarrollo e Innovación Empresarial**, el encuentro tecnológico y de innovación más dinámico del macrosur del Perú. Este sitio web interactivo ha sido desarrollado con tecnologías modernas de renderizado estático y componentes dinámicos para conectar de forma inspiradora a emprendedores, empresas, universidades y tomadores de decisiones de la región.

---

## 📅 Detalles Clave del Evento

La plataforma refleja toda la información y servicios interactivos necesarios para la participación en el evento presencial:

| Parámetro | Detalle |
| :--- | :--- |
| **Fecha** | Miércoles, 1 de Julio de 2026 |
| **Horario** | 4:00 PM – 8:00 PM (PET) |
| **Lugar** | Cámara de Comercio e Industria de Arequipa (CCIA) |
| **Organizador Principal** | **Universidad Nacional de San Agustín de Arequipa (UNSA)** <br> *(Dirección de Innovación y Transferencia Tecnológica)* |
| **Co-organizadores** | **UCSM • UCSP • UPT • UNAM** |
| **Aforo Limitado** | 100 Invitados Exclusivos (Acceso Presencial Premium) |

---

## 🎨 Características Destacadas de la Plataforma

Esta plataforma web no es solo un sitio estático, cuenta con múltiples herramientas y elementos interactivos que enriquecen la experiencia del usuario final:

1. **Diseño Estético Ultramoderno (Premium Ambient Glow):** Interfaz inmersiva con tonos oscuros profundos, degradados armoniosos y orbes de brillo ambiental que cobran vida con sutiles microanimaciones.
2. **Autodiagnóstico Directivo (`DiagnosticTool.tsx`):** Un componente interactivo en React que evalúa el nivel de madurez tecnológica y de innovación de la organización del usuario mediante 3 breves preguntas clave. Al finalizar, genera un análisis personalizado instantáneo que indica qué bloques del programa del simposio aportarán mayor rentabilidad inmediata.
3. **Formulario de Registro Inteligente (`RegistrationForm.tsx`):** Formulario robusto de postulación y registro para los asistentes, con filtros para registrar sectores empresariales e identificar los ejes temáticos de mayor interés.
4. **Acordeón Dinámico de FAQ (`FaqAccordion.tsx`):** Sección de preguntas y respuestas frecuentes estilizada y fluida para guiar a los asistentes con rapidez.
5. **Cronograma y Ejes Temáticos Interactivos:** Navegación optimizada hacia el cronograma del evento (desde la acreditación hasta el cóctel final) y los 5 ejes científicos del Simposio.

---

## 📂 Arquitectura y Estructura del Repositorio

El proyecto está organizado en una estructura monorepo limpia, separando el contenedor de la aplicación frontend y la automatización de despliegues:

```txt
simposio-internacional/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo de trabajo de GitHub Actions para despliegue automático
├── frontend/
│   ├── .astro/                 # Archivos temporales de desarrollo de Astro
│   ├── src/
│   │   ├── components/         # Componentes dinámicos de React (TSX)
│   │   │   ├── DiagnosticTool.tsx
│   │   │   ├── FaqAccordion.tsx
│   │   │   └── RegistrationForm.tsx
│   │   ├── layouts/
│   │   │   └── Layout.astro     # Estructura HTML base con metadatos SEO y orbes decorativos
│   │   ├── pages/
│   │   │   └── index.astro      # Página de aterrizaje principal (Landing Page)
│   │   ├── index.css            # Hoja de estilos principal y tokens de diseño Tailwind
│   │   └── env.d.ts             # Definición de tipos de TypeScript para Astro
│   ├── astro.config.mjs         # Configuración del compilador de Astro (Vite, React, Tailwind)
│   ├── tsconfig.json            # Configuración del compilador de TypeScript
│   ├── package.json             # Dependencias, scripts de desarrollo y comandos de despliegue
│   ├── Dockerfile               # Configuración de compilación y servidor Nginx en contenedores
│   └── nginx.conf               # Configuración del servidor Nginx para redireccionamiento de rutas
├── docker-compose.yml          # Orquestación de desarrollo local con Docker
├── .env                        # Variables de entorno locales y de contenedores
├── LICENSE                     # Licencia del proyecto
└── README.md                   # Esta documentación premium
```

---

## 🛠️ Guía de Inicio Rápido (Desarrollo Local)

Puedes levantar la plataforma en tu entorno local usando cualquiera de las siguientes opciones:

### Opción A: Desarrollo Nativo (NPM)

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (Versión 18 o superior recomedada, preferiblemente Node 22+).

1. **Instalar Dependencias:**
   Navega a la carpeta del frontend e instala las librerías requeridas:
   ```bash
   cd frontend
   npm install
   ```

2. **Ejecutar el Servidor de Desarrollo:**
   Inicia el servidor local de Astro (con soporte para acceso en red local `--host`):
   ```bash
   npm run dev
   ```
   *El sitio estará disponible en [http://localhost:4321/simposio/](http://localhost:4321/simposio/)*

3. **Compilar para Producción:**
   Para compilar los archivos estáticos optimizados y listos para producción:
   ```bash
   npm run build
   ```
   Los archivos resultantes se guardarán en la carpeta `frontend/build/`.

---

### Opción B: Desarrollo Virtualizado (Docker Compose)

Si prefieres no instalar Node.js localmente, puedes usar Docker para empaquetar, construir y servir la aplicación utilizando un servidor web Nginx de producción:

1. **Construir y Levantar el Contenedor:**
   Desde la raíz del repositorio, ejecuta:
   ```bash
   docker-compose up --build -d
   ```

2. **Acceder a la Aplicación:**
   El archivo `.env` configurará el contenedor para que escuche en el puerto `80`. 
   Accede en tu navegador a:
   [http://localhost/simposio/](http://localhost/simposio/)

3. **Detener el Servicio:**
   Para detener y eliminar los contenedores levantados:
   ```bash
   docker-compose down
   ```

---

## 🚀 Configuración y Despliegue en GitHub Pages

El proyecto está configurado para desplegarse de manera fluida en GitHub Pages utilizando dos metodologías:

### 1. Despliegue Automático (GitHub Actions) 🌟 *Recomendado*

Hemos configurado un flujo de trabajo de integración y despliegue continuo (CI/CD) en [.github/workflows/deploy.yml](file:///e:/Workspace/simposio-internacional/.github/workflows/deploy.yml). Cada vez que realices un `git push` a las ramas `main` o `master`, GitHub Actions ejecutará de forma autónoma:

1. El checkout de tu repositorio.
2. La instalación de dependencias en un entorno seguro de Ubuntu.
3. La compilación estática de Astro en el subdirectorio `frontend/`, depositando el bundle en `build/`.
4. El despliegue de los activos directamente al servicio de GitHub Pages.

#### ⚠️ Pasos requeridos en tu cuenta de GitHub:
1. Sube tu código a un repositorio de GitHub (ej. `github.com/cramirez-tech/simposio-internacional` o simplemente `simposio`).
2. Entra a tu repositorio en GitHub y ve a **Settings** > **Pages**.
3. En la sección **Build and deployment** > **Source**, cambia la opción a **GitHub Actions** (en lugar de "Deploy from a branch").
4. ¡Listo! Cualquier nuevo commit en la rama principal desencadenará la compilación e implementación automática. Podrás seguir el progreso en la pestaña **Actions**.

---

### 2. Despliegue Manual (Desde tu Máquina Local)

Si prefieres realizar lanzamientos manuales directamente desde tu consola de comandos, el archivo `frontend/package.json` incluye soporte mediante la librería `gh-pages`:

1. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```
2. Ejecuta el comando de despliegue:
   ```bash
   npm run deploy
   ```
   *Este comando compilará el proyecto en segundo plano (`predeploy`) y publicará el contenido del directorio `build/` en la rama `gh-pages` de tu repositorio remoto de GitHub.*

---

## 🤝 Sinergia Científica y Académica (Incubadoras)

El Simposio se enorgullece de albergar una vitrina rigurosa para **Startups de base tecnológica** provenientes de las incubadoras más importantes del Macrosur:

* **Universidad Nacional de San Agustín (UNSA)**
* **Universidad Católica de Santa María (UCSM)**
* **Universidad Católica San Pablo (UCSP)**
* **Universidad Privada de Tacna (UPT)**
* **Universidad Nacional de Moquegua (UNAM)**

Cada universidad socia actúa bajo los máximos criterios de viabilidad empresarial, reclutando ponentes de clase mundial e instalando stands interactivos con soluciones innovadoras validadas y listas para ser co-invertidas por la red de empresarios asistentes.

---

## 📄 Licencia

Este proyecto se encuentra bajo la licencia **MIT**. Consulta el archivo [LICENSE](file:///e:/Workspace/simposio-internacional/LICENSE) para obtener más detalles sobre el uso permitido.
