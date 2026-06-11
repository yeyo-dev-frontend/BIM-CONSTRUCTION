# 📜 Contribuyendo

¡Gracias por tu interés en mejorar **Contructora BIM**! Sigue estos pasos para que tu contribución sea fluida y cumpla con nuestras normas de calidad.

## 1. Fork y rama

1. Haz **fork** del repositorio.
2. Clona tu fork y crea una rama descriptiva:
   ```bash
   git checkout -b feat/nueva-funcionalidad
   ```

## 2. Instalación

```bash
pnpm install
```

## 3. Desarrollo

- Asegúrate de que tu código sigue el **Atomic Design** y usa los **design tokens** definidos en `docs/STYLING_GUIDE.md`.
- Usa `tailwind-merge` para sobrescribir clases sin conflictos.
- Añade o actualiza la documentación en `docs/` (componentes, guías, etc.).

## 4. Lint y formato

```bashs
pnpm lint -- --fix
```

## 5. Prueba

Ejecuta la suite de pruebas y asegura que no haya fallos:

```bash
pnpm test
```

## 6. Storybook

Si añades un nuevo componente, crea su historia en `stories/` y verifica que se muestre correctamente ejecutando:
```bash
pnpm storybook
```

## 7. Commit y Pull Request

- Usa **Conventional Commits** (ej. `feat: add awesome component`).
- Abre un **Pull Request** contra la rama `main` del repositorio original.
- Completa la plantilla de PR, enlazando a los tickets de GitHub si corresponde.

## 8. Código de Conducta

Este proyecto sigue el [Código de Conducta de la Comunidad de Open Source](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Trata a todos con respeto.
