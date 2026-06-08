# Icon (`<MailIcon />`, `<MenuIcon />`, `<CloseIcon />`)

**Descripción**: Iconos SVG individuales exportados como componentes funcionales. Son los átomos visuales más pequeños del sistema — no componen otros elementos, solo renderizan un SVG con props de personalización.

**Archivo fuente**: `atoms/icons.jsx`

## Iconos disponibles

| Icono       | Tamaño default | Descripción                                         |
| ----------- | -------------- | --------------------------------------------------- |
| `MailIcon`  | `w-5 h-5`     | Icono de sobre/correo. Usado en el CTA "Contáctanos". |
| `MenuIcon`  | `w-6 h-6`     | Icono hamburguesa (3 líneas). Toggle del menú móvil. |
| `CloseIcon` | `w-6 h-6`     | Icono X de cierre. Toggle del menú móvil.            |

## Props (compartidas por todos los iconos)

| Prop        | Tipo             | Default          | Descripción                              |
| ----------- | ---------------- | ---------------- | ---------------------------------------- |
| `className` | `string`         | (ver tabla)      | Clases Tailwind para tamaño y estilo.    |
| `...props`  | `SVGAttributes`  | —                | Atributos SVG estándar (`aria-hidden`, etc.). |

## Ejemplo de uso

```jsx
import { MailIcon, MenuIcon, CloseIcon } from '@/components/atoms/icons';

export default function Demo() {
  return (
    <>
      <MailIcon />
      <MenuIcon className="w-8 h-8 text-blue-600" />
      <CloseIcon className="w-4 h-4" />
    </>
  );
}
```

---
