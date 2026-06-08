# 📖 Guía de inicio rápido

Esta guía te ayudará a poner en marcha el proyecto **Contructora BIM** en pocos minutos.

## Requisitos

- **Node.js** >= 18
- **pnpm** (recomendado) – puedes instalarlo con `npm i -g pnpm`
- **Git** para clonar el repositorio

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/your-repo/contructora-bim.git
cd contructora-bim

# Instalar dependencias
pnpm install
```

## Scripts principales

| Script | Descripción |
|--------|------------|
| `pnpm dev` | Inicia el servidor de desarrollo de Next.js (http://localhost:3000). |
| `pnpm build` | Compila la aplicación para producción. |
| `pnpm start` | Ejecuta la versión compilada. |
| `pnpm storybook` | Lanza Storybook para visualizar la documentación de componentes. |
| `pnpm lint` | Ejecuta ESLint y Prettier para verificar el código. |

## Primeros pasos

1. Ejecuta `pnpm dev` y abre `http://localhost:3000` en tu navegador.
2. Abre `pnpm storybook` para explorar los componentes aislados.
3. Consulta la documentación completa en la carpeta `docs/`.

---

> **Tip:** Usa `pnpm run lint -- --fix` para corregir automáticamente problemas de estilo.
