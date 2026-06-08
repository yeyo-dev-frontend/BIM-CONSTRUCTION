# Input (`<Input />`)

**Descripción**: Campo de texto altamente flexible para formularios. Soporta tipos de entrada HTML, estado de error con estilos visuales, iconos a la izquierda y derecha, y acepta cualquier atributo HTML estándar.

## Props

| Prop        | Tipo             | Default    | Descripción                                                                                                       |
| ----------- | ---------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `type`      | `string`         | `'text'`   | Tipo HTML del input: `text`, `email`, `password`, `number`, `search`, etc.                                        |
| `isError`   | `boolean`        | `false`    | Cuando es `true` muestra borde y anillo de foco rojos para indicar error de validación.                           |
| `leftIcon`  | `node`           | `null`     | Elemento JSX que se renderiza dentro del input a la izquierda (p. ej., un ícono de búsqueda).                     |
| `rightIcon` | `node`           | `null`     | Elemento JSX que se renderiza dentro del input a la derecha (p. ej., botón de toggle de visibilidad).             |
| `className` | `string`         | `''`       | Clases Tailwind adicionales para sobrescribir o extender estilos.                                                 |
| `...props`  | `HTMLAttributes` | —          | Cualquier atributo HTML estándar: `placeholder`, `id`, `disabled`, `onChange`, `value`, `name`, `required`, etc. |

> **Nota**: Cuando se pasan iconos, el campo se envuelve automáticamente en un `<div>` relativo para posicionarlos correctamente. El padding del input se ajusta (`pl-10` / `pr-10`) para que el texto no quede oculto bajo los iconos.

## Ejemplo de uso

```jsx
import Input from '@/components/atoms/inputs';

export default function Demo() {
  return (
    <>
      {/* Input básico */}
      <Input placeholder="Escribe tu nombre..." />

      {/* Input con estado de error */}
      <Input
        type="email"
        placeholder="correo@invalido.com"
        isError={true}
      />

      {/* Input con icono izquierdo */}
      <Input placeholder="Buscar usuarios..." leftIcon={<span>🔍</span>} />

      {/* Input deshabilitado */}
      <Input placeholder="Campo deshabilitado" disabled />
    </>
  );
}
```

---
