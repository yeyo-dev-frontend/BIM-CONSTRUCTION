import { twMerge } from 'tailwind-merge';

export default function Input({
    type = 'text',
    isError = false,
    leftIcon = null,
    rightIcon = null,
    className = '',
    ...props
}) {

    const inputClasses = twMerge(

        'w-full py-2 bg-white border rounded-md outline-none transition-all duration-200 text-gray-900',
        'placeholder:text-gray-400',

        leftIcon ? 'pl-10' : 'pl-4',
        rightIcon ? 'pr-10' : 'pr-4',

        // Estado Normal vs Estado de Error
        isError
            ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent'
            : 'border-gray-300 focus:ring-2 focus:ring-bim-blue focus:border-transparent',

        // Estado Deshabilitado
        'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500',

        className
    );

    // Si NO se pasaron iconos, renderizamos el input limpio directamente para no sobrecargar el DOM
    if (!leftIcon && !rightIcon) {
        return <input type={type} className={inputClasses} {...props} />;
    }

    // Si existen iconos, aplicamos el contenedor relativo
    return (
        <div className="relative w-full text-gray-400 focus-within:text-bim-blue">
            {/* Icono Izquierdo */}
            {leftIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                    {leftIcon}
                </div>
            )}

            <input type={type} className={inputClasses} {...props} />

            {/* Icono Derecho (útil para botones de mostrar contraseña, limpiar campo, etc.) */}
            {rightIcon && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    {rightIcon}
                </div>
            )}
        </div>
    );
}