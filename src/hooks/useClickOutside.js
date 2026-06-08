import { useEffect } from "react";

/**
 * Hook que detecta clics fuera de un elemento referenciado.
 * @param {React.RefObject} ref - Referencia al elemento DOM a monitorear.
 * @param {Function} callback - Función a ejecutar cuando se detecta un clic fuera.
 * @param {boolean} isActive - Si el listener debe estar activo (optimización de rendimiento).
 */
export function useClickOutside(ref, callback, isActive = true) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        // Solo añadimos el listener cuando está activo para optimizar rendimiento
        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Limpieza del evento al desmontar o desactivar
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback, isActive]);
}
