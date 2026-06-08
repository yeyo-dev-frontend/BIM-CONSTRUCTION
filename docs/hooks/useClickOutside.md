# useClickOutside

**Descripción**: Hook personalizado que detecta clics fuera de un elemento referenciado y ejecuta un callback. Se usa para cerrar menús, modales o dropdowns al hacer clic fuera de ellos.

**Archivo fuente**: `hooks/useClickOutside.js`

## Parámetros

| Parámetro  | Tipo              | Default | Descripción                                                                 |
| ---------- | ----------------- | ------- | --------------------------------------------------------------------------- |
| `ref`      | `React.RefObject`  | —       | Referencia al elemento DOM que se quiere monitorear.                        |
| `callback` | `Function`         | —       | Función a ejecutar cuando se detecta un clic fuera del elemento.            |
| `isActive` | `boolean`          | `true`  | Controla si el listener está activo. Optimización para no escuchar siempre. |

## Comportamiento

- El listener de `mousedown` solo se registra cuando `isActive` es `true`.
- El listener se limpia automáticamente al desmontar el componente o cuando `isActive` cambia a `false`.
- Se utiliza `useCallback` en el componente padre para evitar re-renders innecesarios del callback.

## Ejemplo de uso

```jsx
import { useState, useRef, useCallback } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);
  useClickOutside(dropdownRef, close, isOpen);

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Contenido del dropdown</div>}
    </div>
  );
}
```

---
