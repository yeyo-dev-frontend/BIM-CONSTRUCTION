import { twMerge } from 'tailwind-merge';

export default function Textarea({
    isError = false,
    rows = 4,          
    resize = 'none',   
    className = '',
    ...props
}) {

    // Diccionario para controlar el comportamiento de redimensionado
    const resizeClasses = {
        none: 'resize-none',
        y: 'resize-y',
        x: 'resize-x',
        both: 'resize',
    };

    const baseClasses = twMerge(
        'w-full px-4 py-2 bg-white border rounded-md outline-none transition-all duration-200 text-gray-900',
        'placeholder:text-gray-400',

        // Aplicamos el comportamiento de resize seleccionado
        resizeClasses[resize] || resizeClasses.none,

        isError
            ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent'
            : 'border-gray-300 focus:ring-2 focus:ring-bim-blue focus:border-transparent',

        // Estado Deshabilitado
        'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500',

        className
    );

    return (
        <textarea
            rows={rows}
            className={baseClasses}
            {...props}
        />
    );
}