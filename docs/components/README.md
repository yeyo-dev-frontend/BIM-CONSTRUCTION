# 📚 Referencia de Componentes

Todos los componentes del sistema de diseño **Contructora BIM** están organizados siguiendo **Atomic Design** en `src/components/`. Los hooks reutilizables viven en `src/hooks/`.

## Índice rápido

### Átomos (`atoms/`)

| Componente                                | Archivo fuente          | Story en Storybook  | Descripción                                   |
| ----------------------------------------- | ----------------------- | ------------------- | --------------------------------------------- |
| [Title](./Title.md)                       | `atoms/titles.jsx`      | Atoms/Title         | Encabezados h1–h6 responsivos y polimórficos  |
| [Text](./Text.md)                         | `atoms/texts.jsx`       | Atoms/Text          | Texto flexible con variantes de color y peso  |
| [Label](./Label.md)                       | `atoms/labels.jsx`      | Atoms/Label         | Etiqueta de formulario accesible              |
| [Input](./Input.md)                       | `atoms/inputs.jsx`      | Atoms/Input         | Campo de texto con iconos y estado de error   |
| [TextArea](./TextArea.md)                 | `atoms/textAreas.jsx`   | —                   | Área de texto multilinea con resize           |
| [Button](./Button.md)                     | `atoms/buttons.jsx`     | Atoms/Button        | Botón con variantes, tamaños y estado loading |
| [Icon](./Icon.md)                         | `atoms/icons.jsx`       | —                   | Iconos SVG (Mail, Menu, Close)                |

### Moléculas (`molecules/`)

| Componente                                               | Archivo fuente                     | Descripción                                         |
| -------------------------------------------------------- | ---------------------------------- | --------------------------------------------------- |
| [ImageLogo](./Navbar.md#imagelogo-imagelogo-)            | `molecules/navbar/imgLogo.jsx`     | Logo corporativo con `next/image`                   |
| [TitleCorporation](./Navbar.md#titlecorporation-titlecorporation-) | `molecules/navbar/titleCorporation.jsx` | Nombre corporativo en dos líneas (BIM + CONSTRUCTIONS) |
| [NavBranding](./Navbar.md#navbranding-navbranding-)      | `molecules/navbar/navBranding.jsx` | Logo + Título como unidad clickeable                |
| [NavMenu](./Navbar.md#navmenu-navmenu-)                  | `molecules/navbar/navMenu.jsx`     | Lista de enlaces de navegación (horizontal/vertical) |
| [BtnContactanos](./Navbar.md#btncontactanos-btncontactanos-) | `molecules/navbar/btnContactanos.jsx` | CTA "Contáctanos" con icono de correo            |
| [MobileMenuToggle](./Navbar.md#mobilemenutoggle-mobilemenutoggle-) | `molecules/navbar/mobileMenuToggle.jsx` | Botón hamburguesa/cerrar para móvil          |
| [MobileMenuPanel](./Navbar.md#mobilemenupanel-mobilemenupanel-) | `molecules/navbar/mobileMenuPanel.jsx` | Panel desplegable del menú móvil              |

### Organismos (`organisms/`)

| Componente                                  | Archivo fuente          | Descripción                                       |
| ------------------------------------------- | ----------------------- | ------------------------------------------------- |
| [Navbar](./Navbar.md#navbar-navbar-)        | `organisms/navbar.jsx`  | Barra de navegación responsive completa            |

### Hooks (`hooks/`)

| Hook                                                             | Archivo fuente              | Descripción                                      |
| ---------------------------------------------------------------- | --------------------------- | ------------------------------------------------ |
| [useClickOutside](../hooks/useClickOutside.md)                   | `hooks/useClickOutside.js`  | Detecta clics fuera de un elemento referenciado  |

> 💡 Para explorar los componentes de forma interactiva, ejecuta `pnpm storybook` y abre [http://localhost:6006](http://localhost:6006).

---

## Title (`<Title />`)

**Descripción**: Encabezado polimórfico que permite elegir nivel HTML (`h1`–`h6`), variante de color y alineación.

### Props

| Prop        | Tipo      | Default     | Descripción                                                                          |
| ----------- | --------- | ----------- | ------------------------------------------------------------------------------------ |
| `text`      | `string`  | `undefined` | Texto a renderizar (alternativa a `children`).                                       |
| `children`  | `node`    | `undefined` | Contenido interno (alternativa a `text`).                                            |
| `level`     | `string`  | `'h1'`      | Etiqueta HTML: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.                                  |
| `variant`   | `string`  | `'default'` | Color: `default`, `primary` (bim-blue), `secondary` (bim-orange).                   |
| `weight`    | `string`  | `'normal'`  | Grosor: `light`, `normal`, `bold`.                                                   |
| `align`     | `string`  | `'left'`    | Alineación: `left`, `center`, `right`.                                               |
| `className` | `string`  | `''`        | Clases Tailwind adicionales.                                                         |
| `...props`  | `HTMLAttributes` | —    | Atributos HTML estándar.                                                             |

### Ejemplo

```jsx
import Title from '@/components/atoms/titles';

export default function Demo() {
  return (
    <>
      <Title text="Título primario" variant="primary" align="center" />
      <Title level="h2" variant="secondary" weight="bold">
        Texto como hijo
      </Title>
    </>
  );
}
```

---

## Text (`<Text />`)

**Descripción**: Componente tipográfico flexible que puede renderizar párrafos, spans, small, etc.

### Props

| Prop        | Tipo      | Default     | Descripción                                                        |
| ----------- | --------- | ----------- | ------------------------------------------------------------------ |
| `text`      | `string`  | `undefined` | Texto a renderizar (alternativa a `children`).                     |
| `children`  | `node`    | `undefined` | Contenido interno.                                                 |
| `as`        | `string`  | `'p'`       | Tag HTML: `p`, `span`, `small`, `strong`, etc.                     |
| `variant`   | `string`  | `'default'` | Color: `default`, `primary`, `secondary`, `muted`, `error`.        |
| `size`      | `string`  | `'base'`    | Tamaño: `xs`, `sm`, `base`, `lg`, `xl`.                            |
| `weight`    | `string`  | `'normal'`  | Grosor: `light`, `normal`, `medium`, `bold`.                       |
| `align`     | `string`  | `'left'`    | Alineación: `left`, `center`, `right`, `justify`.                  |
| `className` | `string`  | `''`        | Clases Tailwind adicionales.                                       |

### Ejemplo

```jsx
import Text from '@/components/atoms/texts';

export default function Demo() {
  return (
    <>
      <Text text="Párrafo estándar" />
      <Text as="span" variant="primary" weight="bold">
        Texto destacado
      </Text>
    </>
  );
}
```

---

## Label (`<Label />`)

**Descripción**: Etiqueta de formulario accesible con soporte para asterisco `required`.

### Props

| Prop        | Tipo      | Default     | Descripción                                               |
| ----------- | --------- | ----------- | --------------------------------------------------------- |
| `text`      | `string`  | `undefined` | Texto a mostrar.                                          |
| `children`  | `node`    | `undefined` | Contenido interno (alternativa a `text`).                 |
| `htmlFor`   | `string`  | `undefined` | ID del input asociado. **Requerido** para accesibilidad.  |
| `required`  | `boolean` | `false`     | Añade asterisco rojo si `true`.                           |
| `className` | `string`  | `''`        | Clases Tailwind adicionales.                              |

### Ejemplo

```jsx
import Label from '@/components/atoms/labels';

export default function Demo() {
  return (
    <Label htmlFor="email" required text="Correo electrónico" />
  );
}
```

---

## Input (`<Input />`)

**Descripción**: Campo de texto con iconos opcionales y estados de error/disable.

### Props

| Prop        | Tipo             | Default   | Descripción                                    |
| ----------- | ---------------- | --------- | ---------------------------------------------- |
| `type`      | `string`         | `'text'`  | Tipo HTML: `text`, `email`, `password`, etc.   |
| `isError`   | `boolean`        | `false`   | Borde rojo y foco en error.                    |
| `leftIcon`  | `node`           | `null`    | Icono a la izquierda.                          |
| `rightIcon` | `node`           | `null`    | Icono o botón a la derecha.                    |
| `className` | `string`         | `''`      | Clases Tailwind adicionales.                   |
| `...props`  | `HTMLAttributes` | —         | Otros atributos HTML estándar.                 |

### Ejemplo

```jsx
import Input from '@/components/atoms/inputs';

export default function Demo() {
  return (
    <Input placeholder="Buscar" leftIcon={<span>🔍</span>} />
  );
}
```

---

## TextArea (`<Textarea />`)

**Descripción**: Área de texto multilinea con control de `resize` y estado de error.

### Props

| Prop        | Tipo             | Default   | Descripción                                                          |
| ----------- | ---------------- | --------- | -------------------------------------------------------------------- |
| `rows`      | `number`         | `4`       | Número de líneas visibles.                                           |
| `resize`    | `string`         | `'none'`  | Dirección de redimensionado: `none`, `y`, `x`, `both`.               |
| `isError`   | `boolean`        | `false`   | Borde rojo en error.                                                 |
| `className` | `string`         | `''`      | Clases Tailwind adicionales.                                         |
| `...props`  | `HTMLAttributes` | —         | Otros atributos HTML estándar.                                       |

### Ejemplo

```jsx
import Textarea from '@/components/atoms/textAreas';

export default function Demo() {
  return (
    <Textarea placeholder="Descripción" rows={6} resize="y" />
  );
}
```

---

## Button (`<Button />`)

**Descripción**: Botón interactivo con variantes, tamaños, iconos y estado de carga.

### Props

| Prop        | Tipo             | Default     | Descripción                                                                |
| ----------- | ---------------- | ----------- | -------------------------------------------------------------------------- |
| `text`      | `string`         | `undefined` | Texto del botón (alternativa a `children`).                                |
| `children`  | `node`           | `undefined` | Contenido interno.                                                         |
| `type`      | `string`         | `'button'`  | Tipo HTML: `button`, `submit`, `reset`.                                    |
| `variant`   | `string`         | `'primary'` | Estilo visual: `primary`, `secondary`, `outline`, `ghost`, `danger`.       |
| `size`      | `string`         | `'md'`      | Tamaño: `sm`, `md`, `lg`.                                                  |
| `leftIcon`  | `node`           | `null`      | Icono a la izquierda.                                                      |
| `rightIcon` | `node`           | `null`      | Icono a la derecha.                                                        |
| `isLoading` | `boolean`        | `false`     | Muestra spinner y deshabilita.                                             |
| `disabled`  | `boolean`        | `false`     | Deshabilita interacción.                                                   |
| `className` | `string`         | `''`        | Clases Tailwind adicionales.                                               |

### Ejemplo

```jsx
import Button from '@/components/atoms/buttons';

export default function Demo() {
  return (
    <Button variant="primary" text="Guardar Cambios" />
  );
}
```

---

## Icon (`<MailIcon />`, `<MenuIcon />`, `<CloseIcon />`)

**Descripción**: Iconos SVG individuales. Son los átomos visuales más pequeños — no componen otros elementos.

### Iconos disponibles

| Icono       | Tamaño default | Descripción                          |
| ----------- | -------------- | ------------------------------------ |
| `MailIcon`  | `w-5 h-5`     | Icono de sobre/correo.               |
| `MenuIcon`  | `w-6 h-6`     | Icono hamburguesa (3 líneas).        |
| `CloseIcon` | `w-6 h-6`     | Icono X de cierre.                   |

### Ejemplo

```jsx
import { MailIcon, MenuIcon, CloseIcon } from '@/components/atoms/icons';

<MailIcon className="w-8 h-8 text-blue-600" />
```

Para documentación completa de los iconos, ver [Icon.md](./Icon.md).

---
