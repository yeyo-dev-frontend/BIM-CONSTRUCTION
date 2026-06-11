# Contructora BIM

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/your-repo/contructora-bim/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](docs/LICENSE.md)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-9.1.20-ff4785.svg)](https://storybook.js.org/)

---

## 📖 Tabla de contenidos

- [Visión General](#-visión-general)
- [Tecnologías](#-tecnologías)
- [Instalación y Uso](#-instalación-y-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes](#-componentes)
- [Guía de Estilos](#-guía-de-estilos)
- [Storybook](#-storybook)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## ⚛️ Visión General

Este proyecto es un **sistema de diseño basado en Atomic Design** para la construcción de interfaces web premium usando **Next.js**, **Tailwind CSS v4** y componentes polimórficos altamente personalizables.

---

## 🛠️ Tecnologías

| Tecnología | Versión | Descripción |
|---|---|---|
| **Next.js** | 16 | Framework React con renderizado híbrido (SSR/SSG/ISR). |
| **React** | 19 | Librería de UI. |
| **Tailwind CSS** | v4 | Utilidades CSS con soporte para `tailwind-merge`. |
| **tailwind-merge** | ^3 | Fusión inteligente de clases Tailwind sin conflictos. |
| **Storybook** | 9.1.20 | Desarrollo aislado y documentación visual de componentes. |
| **pnpm** | v11 | Gestión de paquetes rápida y eficiente. |
| **JavaScript/JSX** | — | Sin TypeScript (configuración ligera). |

---

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/your-repo/contructora-bim.git
cd contructora-bim

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📖 Storybook

Para explorar, documentar y probar los componentes de forma interactiva:

```bash
pnpm storybook
```

Abre [http://localhost:6006](http://localhost:6006) en tu navegador.

Consulta la [Guía de Storybook](docs/STORYBOOK_GUIDE.md) para más detalles.

---

## 📂 Estructura del Proyecto

```
contructora-bim/
├── src/
│   ├── components/
│   │   ├── atoms/              # Componentes atómicos base
│   │   │   ├── buttons.jsx
│   │   │   ├── icons.jsx
│   │   │   ├── inputs.jsx
│   │   │   ├── labels.jsx
│   │   │   ├── textAreas.jsx
│   │   │   ├── texts.jsx
│   │   │   └── titles.jsx
│   │   ├── molecules/          # Combinaciones de átomos
│   │   │   ├── navbar/
│   │   │   │   ├── imgLogo.jsx
│   │   │   │   ├── titleCorporation.jsx
│   │   │   │   ├── navBranding.jsx
│   │   │   │   ├── navMenu.jsx
│   │   │   │   ├── btnContactanos.jsx
│   │   │   │   ├── mobileMenuToggle.jsx
│   │   │   │   └── mobileMenuPanel.jsx
│   │   │   └── hero/
│   │   │       ├── heroPresentation.jsx
│   │   │       └── btnsAction.jsx
│   │   ├── organisms/          # Secciones completas de UI
│   │   │   ├── navbar.jsx
│   │   │   └── hero.jsx
│   │   └── templates/
│   └── hooks/                  # Custom hooks reutilizables
│       └── useClickOutside.js
├── stories/                    # Historias de Storybook
├── docs/                       # Documentación del proyecto
│   ├── components/             # Docs por componente
│   ├── hooks/                  # Docs por hook
│   └── ...
├── public/                     # Archivos estáticos
├── .storybook/                 # Configuración de Storybook
└── package.json
```

La documentación completa de la estructura está disponible en [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md).

---

## 📦 Componentes

Los componentes están documentados individualmente en la carpeta [`docs/components/`](docs/components/README.md). Aquí tienes un resumen rápido:

**Átomos:**

| Componente | Archivo fuente         | Story Storybook | Descripción                                    |
|------------|------------------------|-----------------|------------------------------------------------|
| [Title](docs/components/Title.md)       | `atoms/titles.jsx`    | `Atoms/Title`   | Encabezados h1–h6 responsivos y polimórficos   |
| [Text](docs/components/Text.md)         | `atoms/texts.jsx`     | `Atoms/Text`    | Texto flexible con variantes de color y peso   |
| [Label](docs/components/Label.md)       | `atoms/labels.jsx`    | `Atoms/Label`   | Etiqueta de formulario accesible               |
| [Input](docs/components/Input.md)       | `atoms/inputs.jsx`    | `Atoms/Input`   | Campo de texto con iconos y estado de error    |
| [TextArea](docs/components/TextArea.md) | `atoms/textAreas.jsx` | —               | Área de texto multilinea con resize            |
| [Button](docs/components/Button.md)     | `atoms/buttons.jsx`   | `Atoms/Button`  | Botón con variantes, tamaños y estado loading  |
| [Icon](docs/components/Icon.md)         | `atoms/icons.jsx`     | —               | Iconos SVG (Mail, Menu, Close)                 |

**Moléculas y Organismos:**

| Componente | Archivo fuente                     | Descripción                                      |
|------------|------------------------------------|--------------------------------------------------|
| [Navbar](docs/components/Navbar.md) | `organisms/navbar.jsx`       | Barra de navegación responsive completa          |
| NavBranding  | `molecules/navbar/navBranding.jsx`  | Logo + Título como unidad clickeable           |
| NavMenu      | `molecules/navbar/navMenu.jsx`      | Lista de enlaces (horizontal/vertical)         |
| BtnContactanos | `molecules/navbar/btnContactanos.jsx` | CTA "Contáctanos" con icono              |
| MobileMenuToggle | `molecules/navbar/mobileMenuToggle.jsx` | Botón hamburguesa/cerrar             |
| MobileMenuPanel  | `molecules/navbar/mobileMenuPanel.jsx`  | Panel desplegable móvil              |
| [Hero](docs/components/Hero.md) | `organisms/hero.jsx`             | Sección hero/banner principal con imagen de fondo |
| HeroPresentation | `molecules/hero/heroPresentation.jsx` | Título h1 + descripción + botones de acción |
| BtnAction        | `molecules/hero/btnsAction.jsx`       | Botones CTA: "Cotizar Proyecto" y "Nuestros Proyectos" |

**Hooks:**

| Hook | Archivo fuente | Descripción |
|------|----------------|-------------|
| [useClickOutside](docs/hooks/useClickOutside.md) | `hooks/useClickOutside.js` | Detecta clics fuera de un elemento |

---

## 🎨 Guía de Estilos

Revisa la guía de tokens de diseño, paleta de colores y uso de `tailwind-merge` en [docs/STYLING_GUIDE.md](docs/STYLING_GUIDE.md).

---

## 🤝 Contribuir

Para contribuir consulta [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md).

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [docs/LICENSE.md](docs/LICENSE.md).

---

## 📞 Contacto

Desarrollado por **Contructora BIM**. Si tienes preguntas, abre un issue o contacta al equipo.

---

*Este README está escrito en español y sigue las mejores prácticas de documentación para proyectos modernos.*