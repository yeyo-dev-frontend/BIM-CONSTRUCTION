# 📖 Guía de desarrollo

## Linting y formato
- **ESLint** con la configuración recomendada de `next/core-web-vitals`.
- **Prettier** con estilo de comas finales y comillas simples.

```bash
# Ejecutar lint y auto‑fix
pnpm lint -- --fix
```

## Commits
- Usa **Conventional Commits** (feat, fix, docs, style, refactor, test, chore).
- Añade un mensaje de cuerpo cuando sea necesario.

## Pruebas
- **Jest** + **React Testing Library** para componentes.
- Ejecuta `pnpm test` para correr la suite.

## CI/CD
- Se usa GitHub Actions para lint, test y build.
- Despliegue automático a Vercel al merge en `main`.

---
> **Tip:** Mantén el `README` actualizado con los badges de CI.
