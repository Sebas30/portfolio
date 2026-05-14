# 🚀 Portafolio — Sebastian Alvarez Barona

Portafolio personal moderno construido con **React + Vite + Tailwind CSS + Framer Motion**.
Diseño urbano con paleta azul/cyan, limpio y profesional.

---

## 🎨 Características de diseño

- **Paleta de colores azul/cyan moderna**: Primary (#1890ff) + Cyan (#13c2c2)
- **Tipografías urbanas**: Outfit (display) · Plus Jakarta Sans (body) · IBM Plex Mono (code)
- **Animaciones fluidas** con Framer Motion
- **Componentes glassmorphism** y efectos de hover modernos
- **Responsive** y optimizado para mobile
- **Accesibilidad** considerada en cada componente

---

## 🛠️ Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion (animaciones)
- Lucide React (íconos)

---

## 📋 Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

```bash
node --version
npm --version
```

---

## 🚀 Instalación y uso local

```bash
# 1. Clonar o extraer el proyecto
cd portfolio-v2

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

---

## 🏗️ Build de producción

```bash
npm run build
```

Los archivos estáticos quedan en `/dist`.

Para previsualizar el build localmente:

```bash
npm run preview
```

---

## 📝 Personalización

Toda la información del portafolio está en:

```
src/data/portfolio.js
```

Allí puedes editar:

- **PROFILE** — datos personales, email, teléfono, redes sociales
- **STACK** — tecnologías agrupadas por categorías
- **PROJECTS** — listado completo de proyectos con repos
- **EXPERIENCE** — trayectoria laboral completa
- **ACHIEVEMENTS** — logros destacados

---

## ☁️ Despliegue en Vercel

### Opción 1 — Desde GitHub (recomendada)

1. Sube el proyecto a un repositorio en GitHub:

```bash
git init
git add .
git commit -m "feat: portafolio v2"
git branch -M main
git remote add origin https://github.com/Sebas30/portfolio.git
git push -u origin main
```

2. Entra a [vercel.com](https://vercel.com) y crea una cuenta.
3. Click en **"Add New Project"** → **"Import Git Repository"**.
4. Selecciona el repo del portafolio.
5. Vercel detecta automáticamente Vite. No necesitas configurar nada.
6. Click en **"Deploy"**.

En menos de un minuto tendrás tu portafolio en una URL como:
`https://tu-portfolio.vercel.app`

### Opción 2 — Desde la CLI de Vercel

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Desplegar (te pedirá login la primera vez)
cd portfolio-v2
vercel

# Desplegar a producción
vercel --prod
```

### Dominio personalizado (opcional)

Una vez desplegado:

1. Entra a tu proyecto en el dashboard de Vercel
2. Settings → Domains
3. Agrega tu dominio (ej: `sebastianalvarez.dev`)
4. Vercel te da los registros DNS para configurar

---

## 📂 Estructura del proyecto

```
portfolio-v2/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Stack.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolio.js     ← EDITAR AQUÍ
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## 🎨 Paleta de colores

```css
Primary Blue: #1890ff (y variantes)
Cyan: #13c2c2 (y variantes)
Dark: #0a1016 → #1e2a3e → #314466
Grays: Del 50 al 900
```

---

## ✨ Secciones incluidas

1. **Hero** — Presentación con nombre, bio, badges de tech y CTAs
2. **Proyectos** — 8 proyectos con descripción, stack, repos y estados
3. **Stack Técnico** — 5 categorías con niveles de experiencia
4. **Experiencia** — Timeline completa de trayectoria laboral
5. **Contacto** — Email, teléfono, GitHub, LinkedIn

---

## 👤 Autor

**Sebastian Alvarez Barona**
- GitHub: [@Sebas30](https://github.com/Sebas30)
- LinkedIn: [sebastian-alvarez-barona](https://www.linkedin.com/in/sebastian-alvarez-barona-04041719b/)
- Email: alvarezbaronasebastian@hotmail.com
- Teléfono: +57 322 7681990

---

## 📄 Licencia

Este proyecto es personal. Siéntete libre de usarlo como inspiración, pero por favor no copies el contenido directamente.

---
