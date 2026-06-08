import { twMerge } from "tailwind-merge";

export default function Text({
    text,
    children,
    as = 'p',
    variant = 'default',
    size ='base',
    weight = 'normal',
    align ='left',
    className =  '',
    ...props
}) {

    const Tag = as

    const variants = {
        default: 'text-gray-700 dark:text-bim-white',
        primary: 'text-bim-blue',
        secondary: 'text-bim-orange',
        muted: 'text-gray-500',
        error: 'text-red-500',
    }

    const sizes ={
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    }

    const alignments = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    }

    const weights = {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold', 
    }

    const baseClasses = twMerge(
        variants[variant] || variants.default,
        sizes[size] || sizes.base,
        alignments[align] || alignments.left,
        weights[weight] || weights.normal,
        'leading-relaxed', //mejora la legilibilidad en parrafos
        className
    )

    return(
        <Tag className={baseClasses} {...props}>
            {text || children}
        </Tag>
    )
}