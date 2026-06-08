# 🎨 Guía de estilos y Design Tokens

## Paleta de colores corporativos (BIM)

La paleta de colores oficial se define en `src/app/globals.css` y se integra con Tailwind CSS v4 a través de la directiva `@theme inline`.

| Token CSS             | Clase Tailwind       | Color Hex   | Descripción / Uso recomendado                       |
| --------------------- | -------------------- | ----------- | --------------------------------------------------- |
| `--color-bim-blue`    | `bg-bim-blue` / etc. | `#223c91`   | Azul corporativo primario. Botones, encabezados.    |
| `--color-bim-orange`  | `bg-bim-orange` / etc| `#dc6403`   | Naranja corporativo secundario. Acentos, alertas.   |
| `--color-bim-white`   | `bg-bim-white` / etc | `#ffffff`   | Blanco base corporativo. Fondos, textos invertidos. |

## Tipografía

El sistema de diseño utiliza tres familias tipográficas, también expuestas como variables CSS y tokens de Tailwind en `globals.css`:

### 1. Montserrat (`--font-montserrat`)
- **Clase Tailwind**: `font-montserrat`
- **Uso**: Tipografía principal para **textos**, párrafos, etiquetas, cuerpo del contenido.
- **Configuración por defecto**: Usada como fuente base en el `body`.

### 2. Bebas Neue (`--font-bebas`)
- **Clase Tailwind**: `font-bebas`
- **Uso**: Tipografía para **títulos** o comunicación visual con alto impacto.

### 3. Impact (`--font-impact`)
- **Clase Tailwind**: `font-impact`
- **Uso**: Tipografía alternativa para comunicación visual.

## Uso de Tailwind + `tailwind-merge`

Para evitar conflictos de clases en los componentes atómicos, todos los componentes usan la utilidad `tailwind-merge`. Ejemplo de implementación en los átomos:

```jsx
import { twMerge } from 'tailwind-merge';

export default function Button({ className, ...props }) {
  const baseClasses = twMerge(
    'inline-flex items-center justify-center rounded-md bg-bim-blue text-bim-white font-montserrat',
    className
  );
  return <button className={baseClasses} {...props} />;
}
```

Esto garantiza que **las clases predeterminadas** del sistema de diseño (como nuestros colores o tipografías corporativas) se sobrescriban correctamente y de forma predecible cuando se pasa la prop `className`.

## Variables Globales (CSS)

La configuración base que habilita estos tokens está en `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  /* COLORES CORPORATIVOS */
  --color-bim-blue: #223c91;
  --color-bim-orange: #dc6403;
  --color-bim-white: #ffffff;

  /* TIPOGRAFÍAS CORPORATIVAS */
  --font-montserrat: 'Montserrat', sans-serif;
  --font-bebas: 'Bebas Neue', sans-serif;
  --font-impact: 'Impact', sans-serif;
}

@theme inline {
  /* colores de BIM disponibles para bg- text- border- etc. */
  --color-bim-blue: var(--color-bim-blue);
  --color-bim-orange: var(--color-bim-orange);
  --color-bim-white: var(--color-bim-white);

  /* fuentes de BIM disponibles para font- */
  --font-montserrat: var(--font-montserrat);
  --font-bebas: var(--font-bebas);
  --font-impact: var(--font-impact);
}
```

---
> **Tip:** Cuando necesites añadir un nuevo color, tipografía o variable global, debes actualizar el archivo `src/app/globals.css`, agregar el token al bloque `:root` y luego exponerlo a Tailwind dentro del bloque `@theme inline`.
