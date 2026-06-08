# 📚 Guía de Storybook

Esta guía está pensada para los desarrolladores que se incorporan al proyecto **Contructora BIM** y necesitan conocer cómo usar **Storybook** para visualizar y validar los componentes UI.

## 1. ¿Qué es Storybook?

Storybook es un entorno aislado para desarrollar componentes de UI de forma independiente del resto de la aplicación. Permite:

- Ver cada variante del componente en diferentes estados (default, hover, disabled, etc.).
- Documentar públicamente la API del componente (props, tipos, valores por defecto).
- Detectar regresiones visuales y de comportamiento rápidamente.

## 2. Estructura de archivos

- **`stories/`** – Carpeta raíz donde se encuentran los archivos de historias.
  - Los archivos deben tener extensión **`.stories.jsx`** (JavaScript/JSX). Hemos migrado todas las stories a JavaScript para mantener la consistencia del proyecto.
  - Cada historia exporta un **default** con `title`, `component` y `argTypes`, y una o varias plantillas que representan diferentes variantes del componente.
- **`.storybook/`** – Configuración de Storybook.
  - `main.js` define dónde buscar historias y qué addons cargar.
  - `preview.js` (opcional) permite aplicar decoradores y estilos globales.

## 3. Cómo ejecutar Storybook

```bash
pnpm storybook
```

Esto levanta un servidor de desarrollo (por defecto en `http://localhost:6006`) donde podrás navegar entre los componentes.

## 4. Añadir una nueva historia

1. **Crear el archivo** dentro de `stories/` siguiendo la convención `<NombreComponente>.stories.jsx`.
2. **Importar el componente**:
   ```js
   import MyComponent from "@/components/atoms/MyComponent";
   ```
3. **Exportar la configuración**:
   ```js
   export default {
     title: "Atoms/MyComponent",
     component: MyComponent,
     argTypes: {
       // Define controles para las props que deseas que sean editables en la UI de Storybook
       variant: {
         control: { type: "select", options: ["default", "primary"] },
       },
       disabled: { control: "boolean" },
     },
   };
   ```
4. **Crear plantillas** (variantes) usando la función `Template`:

   ```js
   const Template = (args) => <MyComponent {...args} />;

   export const Default = Template.bind({});
   Default.args = { variant: "default", disabled: false };

   export const Primary = Template.bind({});
   Primary.args = { variant: "primary", disabled: false };
   ```

5. Guardar y recargar Storybook; la nueva historia aparecerá automáticamente.

## 5. Documentar la story

Para que la documentación sea útil, cada archivo de historia debe incluir:

- **Descripción breve** del propósito del componente.
- **Propiedades (argTypes)** bien definidas, con opciones y tipos.
- **Ejemplos de uso** (una o más variantes) que cubran los casos de uso más comunes.
- **Capturas de pantalla** (opcional) – puedes generar imágenes usando la herramienta `generate_image` y enlazarlas dentro del archivo Markdown de la documentación de componentes.

## 6. Buenas prácticas

- Mantener la **coherencia** de nombres (`<Componente>.stories.jsx`).
- Evitar lógica de negocio dentro de las historias; deben ser **presentacionales**.
- Utilizar `controls` para que el equipo pueda interactuar rápidamente con los props.
- Actualizar la documentación de componentes en `docs/components/` cada vez que se añada o modifique una story.

## 7. Referencias rápidas

- **Comando para iniciar Storybook**: `pnpm storybook`
- **Comando para construir la versión estática**: `pnpm build-storybook`
- **Añadir un addon** (ejemplo): `pnpm add -D @storybook/addon-a11y`
