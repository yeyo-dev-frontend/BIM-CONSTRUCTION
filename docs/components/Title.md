# Title (`<Title />`)

**Descripción**: Encabezado polimórfico que permite elegir nivel HTML (`h1`–`h6`), variante de color corporativo, peso tipográfico y alineación. Incluye tamaños responsivos predefinidos por nivel.

## Props

| Prop        | Tipo      | Default     | Descripción                                                                          |
| ----------- | --------- | ----------- | ------------------------------------------------------------------------------------ |
| `text`      | `string`  | `undefined` | Texto a renderizar (alternativa a `children`).                                       |
| `children`  | `node`    | `undefined` | Contenido interno (alternativa a `text`).                                            |
| `level`     | `string`  | `'h1'`      | Etiqueta HTML: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Determina el tamaño responsivo.  |
| `variant`   | `string`  | `'default'` | Color corporativo: `default` (gris oscuro), `primary` (bim-blue), `secondary` (bim-orange). |
| `weight`    | `string`  | `'normal'`  | Grosor tipográfico: `light`, `normal`, `bold`.                                       |
| `align`     | `string`  | `'left'`    | Alineación del texto: `left`, `center`, `right`.                                     |
| `className` | `string`  | `''`        | Clases Tailwind adicionales.                                                         |
| `...props`  | `HTMLAttributes` | —    | Cualquier atributo HTML estándar (`id`, `onClick`, `aria-label`, etc.).              |

## Tamaños responsivos por nivel

Cada `level` tiene un conjunto de tamaños responsivos predefinidos:

| Level | Comportamiento                                             |
| ----- | ---------------------------------------------------------- |
| `h1`  | Escala desde `1.3em` (xs) hasta `2.3em` (xl)              |
| `h2`  | Escala desde `1.3em` (base) hasta `1.6em` (md)            |
| `h3`  | Fijo en `~1.2em` a partir de `sm`                         |
| `h4`  | `text-base` (móvil) → `1.1em` (md+)                       |
| `h5`  | `text-xs` (móvil) → `text-base` (md+)                     |
| `h6`  | `10px` (móvil) → `text-sm` (md+)                          |

## Ejemplo de uso

```jsx
import Title from '@/components/atoms/titles';

export default function Demo() {
  return (
    <>
      {/* Título principal */}
      <Title text="Bienvenido a Contructora BIM" variant="primary" align="center" />

      {/* Subtítulo con children */}
      <Title level="h2" variant="secondary" weight="bold">
        Nuestros servicios
      </Title>

      {/* Encabezado de sección */}
      <Title level="h3" weight="light" align="right" text="Más información" />
    </>
  );
}
```

---
