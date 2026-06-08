# TextArea (`<Textarea />`)

**Descripción**: Campo de texto multilinea versátil para formularios. Permite personalizar el número de filas visibles, el comportamiento de redimensionado, el estado de error y estilos mediante clases de Tailwind.

## Props

| Prop        | Tipo             | Default    | Descripción                                                                                         |
| ----------- | ---------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| `isError`   | `boolean`        | `false`    | Cuando es `true` muestra borde y anillo de foco rojos para indicar error de validación.             |
| `rows`      | `number`         | `4`        | Número de filas visibles del textarea.                                                              |
| `resize`    | `string`         | `'none'`   | Comportamiento de redimensionado: `none`, `y` (vertical), `x` (horizontal), `both` (libre).        |
| `className` | `string`         | `''`       | Clases Tailwind adicionales para sobrescribir o extender estilos.                                   |
| `...props`  | `HTMLAttributes` | —          | Cualquier atributo HTML estándar: `placeholder`, `id`, `disabled`, `onChange`, `name`, `required`, etc. |

## Opciones de `resize`

| Valor  | Comportamiento                   | Clase Tailwind  |
| ------ | -------------------------------- | --------------- |
| `none` | Sin redimensionado (por defecto) | `resize-none`   |
| `y`    | Solo redimensionado vertical     | `resize-y`      |
| `x`    | Solo redimensionado horizontal   | `resize-x`      |
| `both` | Libre en ambas direcciones       | `resize`        |

## Ejemplo de uso

```jsx
import Textarea from '@/components/atoms/textAreas';

export default function Demo() {
  return (
    <>
      {/* TextArea simple */}
      <Textarea placeholder="Describe tu proyecto..." rows={5} />

      {/* TextArea con redimensionado vertical */}
      <Textarea placeholder="Comentarios" resize="y" rows={4} />

      {/* TextArea con estado de error */}
      <Textarea placeholder="Campo requerido" isError rows={4} />

      {/* TextArea deshabilitado */}
      <Textarea placeholder="Solo lectura" disabled rows={3} />
    </>
  );
}
```

---
