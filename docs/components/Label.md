# Label (`<Label />`)

**Descripción**: Etiqueta de formulario accesible que se asocia a un elemento `<input>` mediante `htmlFor`. Incluye soporte para asterisco rojo cuando el campo es obligatorio (`required`). Acepta texto como prop `text` o como `children`.

## Props

| Prop        | Tipo      | Default     | Descripción                                          |
| ----------- | --------- | ----------- | ---------------------------------------------------- |
| `text`      | `string`  | `undefined` | Texto a mostrar en la etiqueta (alternativa a `children`). |
| `children`  | `node`    | `undefined` | Contenido interno (alternativa a `text`).            |
| `htmlFor`   | `string`  | `undefined` | ID del elemento `<input>` asociado. **Requerido** para accesibilidad. |
| `required`  | `boolean` | `false`     | Cuando es `true` muestra un asterisco rojo (`*`) con `aria-hidden`. |
| `className` | `string`  | `''`        | Clases Tailwind adicionales.                         |
| `...props`  | `HTMLAttributes` | —    | Cualquier atributo HTML estándar del elemento `<label>`. |

## Ejemplo de uso

```jsx
import Label from '@/components/atoms/labels';

export default function Demo() {
  return (
    <>
      {/* Etiqueta simple */}
      <Label htmlFor="nombre" text="Nombre completo" />

      {/* Etiqueta con campo requerido */}
      <Label htmlFor="email" required text="Correo electrónico" />

      {/* Etiqueta con children */}
      <Label htmlFor="password" required>
        Contraseña
      </Label>
    </>
  );
}
```

---
