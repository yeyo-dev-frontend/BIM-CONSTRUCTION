# Text (`<Text />`)

**Descripción**: Componente tipográfico flexible que renderiza párrafos, spans, small, strong u otras etiquetas inline/block, manteniendo consistencia de interlineado y colores corporativos mediante `tailwind-merge`.

## Props

| Prop        | Tipo      | Default       | Descripción                                                        |
| ----------- | --------- | ------------- | ------------------------------------------------------------------ |
| `text`      | `string`  | `undefined`   | Texto a renderizar (alternativa a `children`).                     |
| `children`  | `node`    | `undefined`   | Contenido interno (alternativa a `text`).                          |
| `as`        | `string`  | `'p'`         | Etiqueta HTML a usar: `p`, `span`, `small`, `strong`, etc.         |
| `variant`   | `string`  | `'default'`   | Color del texto: `default`, `primary`, `secondary`, `muted`, `error`. |
| `size`      | `string`  | `'base'`      | Tamaño tipográfico: `xs`, `sm`, `base`, `lg`, `xl`.                |
| `weight`    | `string`  | `'normal'`    | Grosor tipográfico: `light`, `normal`, `medium`, `bold`.           |
| `align`     | `string`  | `'left'`      | Alineación: `left`, `center`, `right`, `justify`.                  |
| `className` | `string`  | `''`          | Clases Tailwind adicionales.                                       |
| `...props`  | `HTMLAttributes` | —      | Cualquier atributo HTML estándar.                                  |

## Variantes de color

| Variante    | Color aplicado                              |
| ----------- | ------------------------------------------- |
| `default`   | `text-gray-700` (dark: `text-bim-white`)    |
| `primary`   | `text-bim-blue`                             |
| `secondary` | `text-bim-orange`                           |
| `muted`     | `text-gray-500`                             |
| `error`     | `text-red-500`                              |

## Ejemplo de uso

```jsx
import Text from '@/components/atoms/texts';

export default function Demo() {
  return (
    <>
      {/* Párrafo estándar */}
      <Text text="Párrafo estándar con interlineado perfecto." />

      {/* Texto destacado con color primario */}
      <Text as="span" variant="primary" weight="bold" size="lg">
        Texto destacado
      </Text>

      {/* Texto de error */}
      <Text variant="error" size="sm" text="Este campo es obligatorio." />

      {/* Texto silenciado centrado */}
      <Text variant="muted" align="center" as="small" text="* Aplican términos y condiciones." />
    </>
  );
}
```

---
