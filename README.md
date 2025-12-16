# 🏁 BoxBox News — Trabajo Final Integrador (Frontend)

Sitio web estilo **Blog/Portal de Fórmula 1** con estética **negro/rojo** (F1 vibes), construido con **HTML + CSS + Bootstrap + JavaScript**.  
El objetivo es presentar un proyecto **completo, navegable, responsive y “premium”**, con componentes reales (cards, carousel, accordion, grid, formularios) y páginas temáticas.

---

## 🚀 Cómo ejecutar el proyecto

### Opción A — rápido
Abrí `index.html` con doble click.

### Opción B — recomendado (VS Code)
1. Abrí la carpeta del proyecto en **VS Code**
2. Instalá la extensión **Live Server**
3. Click derecho en `index.html` → **Open with Live Server**

### Opción C — GitHub Pages

[Visita GitHub Pages](https://alexlpda1420.github.io/Proyecto-Final-Programaci-n-Frontend-Potrero-Digital/)


### Opción D — Vercel

[Visita Vercel](https://boxboxnews.vercel.app/)


---

## 🎯 Objetivos del proyecto
- Crear una web **clara y atractiva** con temática F1.
- Aplicar buenas prácticas: **estructura por páginas**, CSS externo, componentes Bootstrap, JS separado.
- Asegurar **responsive real** (desktop + mobile).
- Incorporar detalles “premium”: hover, focus visible, transiciones y micro-interacciones.
- Contenido: **Noticias**, **Calendario 2025**, **Pilotos & Equipos**, **Videos**, **Sobre mí**, **Contacto**.

---

## 🧩 Tecnologías usadas
- **HTML5** (estructura semántica)
- **CSS3** (variables, grid/flex, responsive, transiciones)
- **Bootstrap 5.3** (layout, carousel, accordion, utilities)
- **Bootstrap Icons** (íconos)
- **JavaScript** (interacciones del calendario y UX)
- **Imágenes** (hero, noticias, logo)

---

## 🗂️ Estructura de carpetas
> (Puede variar levemente según tu repo, pero la idea es esta)

```txt
/
├─ index.html
├─ public/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ calendario.js
│  ├─ img/
│  │  ├─ hero.jpg
│  │  ├─ logo.jpg
│  │  ├─ noticia-1.jpg ... noticia-6.jpg
│  │  └─ (pilotos y equipos)
│  └─ html/
│     ├─ noticias.html
│     ├─ noticia.html
│     ├─ noticia-drs.html
│     ├─ noticia-safetycar.html
│     ├─ noticia-estrategia-tv.html
│     ├─ noticia-pitstop.html
│     ├─ noticia-banderas.html
│     ├─ calendario.html
│     ├─ pilotos.html
│     ├─ videos.html
│     ├─ sobre.html
│     └─ contacto.html
```

---

## 🧠 Idea y concepto (temática)
**BoxBox News** es un portal ficticio orientado a F1: noticias, análisis y recursos visuales para entender la categoría.  
Se priorizó:
- **Diseño oscuro con acento rojo**
- Lectura rápida con **cards**
- Contenidos conectados por navegación
- Componentes Bootstrap para sumar “nivel entrega”

---

## 🧭 Navegación del sitio
- **Inicio** (`index.html`): hero + carrusel + últimas noticias
- **Noticias**: listado y acceso a notas individuales
- **Nota individual**: layout 2 columnas + paneles + “notas relacionadas”
- **Calendario 2025**: listado + detalle dinámico + mapa de circuito + stats + glosario
- **Pilotos & Equipos**: cards en 2 columnas + fichas + dato curioso
- **Videos**: grid 2x2 de iframes
- **Sobre mí**: info del autor + herramientas usadas
- **Contacto**: formulario

---

## 🎨 Identidad visual (estilo F1)

### Paleta (CSS variables)
- Fondo: `--bg: #0b0b0f`
- Panel: `--panel` / `--panel-2`
- Texto: `--text`
- Secundario: `--muted`
- Primario: `--red: #e10600`

### Logo
- Archivo: `public/img/logo.jpg`
- Usos:
  - **Hero** (centrado y grande)
  - **Navbar** (ícono + nombre)
  - **Favicon** (todas las páginas)

---

## ⚙️ Componentes principales

### 1) Hero “premium”
- Logo centrado + claim
- Textos apilados para mejor lectura
- Responsive con `clamp()` y media queries

### 2) Carrusel (Bootstrap)
- Slides con CTA “Leer”
- Cada slide apunta a una **nota específica**
- Uso de badges + captions

### 3) Cards de noticias
- Grid con `.news-grid`
- Hover sutil + borde rojo al pasar el mouse
- Links fuertes (`.link-strong`) para CTA

### 4) Notas individuales (plantilla)
- Layout 2 columnas (`.layout-two-cols`)
- Artículo con imagen + secciones
- Sidebar con paneles informativos
- Footer consistente

### 5) Calendario F1 2025 (JS)
- Lista de rondas
- Búsqueda por GP/circuito/ciudad
- Panel dinámico con:
  - **Mapa del circuito**
  - **Datos del circuito**
  - Accordion “Glosario” (Bootstrap)

### 6) Pilotos & Equipos
- Cards en **2 columnas**
- Imagen arriba + datos + “dato curioso”
- Responsive: 1 columna en pantallas chicas

### 7) Videos
- 4 iframes en grid limpio (2x2)
- `aspect-ratio: 16/9` para mantener formato perfecto

---

## 🧷 Detalles “premium” (UX/UI)
- ✅ Hover suave en cards/botones
- ✅ Focus visible (accesibilidad real con teclado)
- ✅ Transiciones consistentes
- ✅ Inputs con mejor contraste
- ✅ Ajustes de spacing en secciones
- ✅ `prefers-reduced-motion` para usuarios sensibles a animaciones

---

## ♿ Accesibilidad (A11y) aplicada
- `alt` en imágenes
- `aria-label` en íconos de redes
- `:focus-visible` para navegación con teclado
- Contraste mejorado en textos secundarios

---

## ✅ Checklist final de entrega
- [x] Sitio multipágina
- [x] Navbar + footer consistentes
- [x] CSS externo (sin inline)
- [x] Bootstrap integrado (carousel + accordion + layout)
- [x] Responsive funcionando
- [x] JS externo (calendario)
- [x] Imágenes y contenido coherente con enlaces correctos
- [x] Detalles premium: hover/focus/transiciones
- [x] Logo + favicon integrados

---

## 🧑‍💻 Autor
**Alexis Roldan**  
Proyecto académico — Programación Web Frontend  
© 2025
