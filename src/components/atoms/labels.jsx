import { twMerge } from "tailwind-merge";

export default function Label({
    text,
    children,
    htmlFor,
    required = false,
    className = '',
    ...props
}) {

    const baseClasses = twMerge(
        'block text-sm font-medium text-gray-700 dark:text-bim-white mb-1',
        className
    )

    return(
        <label htmlFor={htmlFor} className={baseClasses} {...props}>
            {text || children}
            {required && <span className="text-red-500 ml-1"  aria-hidden="true">*</span>}
        </label>
    )
}