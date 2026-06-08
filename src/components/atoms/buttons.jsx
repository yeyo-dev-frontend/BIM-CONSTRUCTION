import { twMerge } from "tailwind-merge";

export default function Button ({
    text,
    children,
    type = 'button',
    variant = 'primary',
    size = 'md',
    leftIcon = null,
    rightIcon = null,
    isLoading = false,
    disabled = false,
    className ='',
    ...props
}) {
        const variants = {
        primary: 'bg-bim-blue text-white hover:bg-blue-700 border border-transparent',
        secondary: 'bg-bim-orange text-white hover:bg-orange-600 border border-transparent',
        outline: 'bg-transparent text-bim-blue border border-bim-blue hover:bg-blue-50',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-transparent',
        danger: 'bg-red-600 text-white hover:bg-red-700 border border-transparent',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg font-medium',
    }

    const baseClasses = twMerge(
        'inline-flex items-center justify-center gap-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bim-blue',

        variants[variant] || variants.primary,
        sizes[size] || sizes.md,

    (disabled || isLoading) && 'opacity-60 cursor-not-allowed pointer-events-none',
    className
    )

    return (
        <button
            type={type}
            className={baseClasses}
            disabled={disabled || isLoading}
            {...props}
        >

            {isLoading ? (
                <svg 
                    className="animate-spin h-4 w-4 text-current"
                    xmlns="http://www.w3.org/200/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                leftIcon
            )}

            <span>{text || children}</span>

            {!isLoading && rightIcon}

        </button>
    )
}