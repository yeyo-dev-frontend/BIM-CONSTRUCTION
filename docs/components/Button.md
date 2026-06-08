# Button (`<Button />`)

**Descripción**: Componente de botón reutilizable que soporta variantes visuales, tamaños, iconos izquierdo/derecho, estado de carga y deshabilitado. Acepta texto como `text`, `children`, o ambos.

## Props

| Prop        | Tipo       | Default     | Descripción                                                                    |
| ----------- | ---------- | ----------- | ------------------------------------------------------------------------------ |
| `text`      | `string`   | `undefined` | Texto del botón (alternativa a `children`).                                    |
| `children`  | `node`     | `undefined` | Contenido interno del botón (alternativa a `text`).                            |
| `type`      | `string`   | `'button'`  | Tipo HTML (`button`, `submit`, `reset`).                                       |
| `variant`   | `string`   | `'primary'` | Variante visual: `primary`, `secondary`, `outline`, `ghost`, `danger`.         |
| `size`      | `string`   | `'md'`      | Tamaño del botón: `sm`, `md`, `lg`.                                            |
| `leftIcon`  | `node`     | `null`      | Ícono o elemento JSX que se muestra a la izquierda del texto.                  |
| `rightIcon` | `node`     | `null`      | Ícono o elemento JSX que se muestra a la derecha del texto.                    |
| `isLoading` | `boolean`  | `false`     | Muestra spinner interno, bloquea interacción y aplica opacidad.                |
| `disabled`  | `boolean`  | `false`     | Desactiva el botón y aplica estilos de deshabilitado.                          |
| `className` | `string`   | `''`        | Clases Tailwind adicionales para sobrescribir o extender estilos.              |
| `...props`  | `HTMLAttributes` | —     | Cualquier atributo HTML estándar (`onClick`, `id`, `aria-label`, etc.).        |

## Variantes disponibles

| Variante    | Descripción                                    |
| ----------- | ---------------------------------------------- |
| `primary`   | Fondo azul corporativo (`bim-blue`), texto blanco. |
| `secondary` | Fondo naranja corporativo (`bim-orange`), texto blanco. |
| `outline`   | Fondo transparente, borde azul, texto azul.    |
| `ghost`     | Fondo transparente, texto gris, hover suave.   |
| `danger`    | Fondo rojo, texto blanco. Para acciones destructivas. |

## Tamaños disponibles

| Tamaño | Clases aplicadas              |
| ------ | ----------------------------- |
| `sm`   | `px-3 py-1.5 text-sm`        |
| `md`   | `px-4 py-2 text-base`        |
| `lg`   | `px-6 py-3 text-lg font-medium` |

## Ejemplo de uso

```jsx
import Button from '@/components/atoms/buttons';

export default function Demo() {
  return (
    <>
      {/* Botón primario */}
      <Button variant="primary" size="md" text="Guardar Cambios" />

      {/* Botón secundario deshabilitado */}
      <Button variant="secondary" disabled size="sm" text="Cancelado" />

      {/* Botón con estado de carga */}
      <Button variant="primary" isLoading text="Enviando..." />

      {/* Botón danger */}
      <Button variant="danger" size="lg" text="Eliminar cuenta" />
    </>
  );
}
```

---
