import { twMerge } from "tailwind-merge";

export default function Title ({
  text,
  children,
  level = 'h1',
  variant = 'default',
  weight = 'normal',
  align = 'left',
  className = '',
  ...props

}) {

  const Tag = level

  const variants = {
    default : 'text-gray-900',
    primary : 'text-bim-blue',
    secondary : 'text-bim-orange'
  }

  const alignments = {
    left: `text-left`,
    center: `text-center`,
    right : `text-right`
  }

  const defaultByLevel = {
    h1: 'text-[1.3em] xs:text-[1.6em] sm:text-[1.9em]  lg:text-[2.1em] xl:text-[2.3em]',
    h2: 'text-[1.3em] xs:text-[1.2em] sm:text-[1.3em] md:text-[1.6em]',
    h3: 'text-[1.3em] sm:text-[1.2em] md:text-[1.2em] xl:text-[1.2em]',
    h4: 'text-base md:text-[1.1em]',
    h5: 'text-xs sm:text-sm md:text-base',
    h6: 'text-[10px] sm:text-xs md:text-sm',
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
  };

  const baseClasses = twMerge(
    variants[variant] || variants.default,
    alignments[align] || alignments.left,
    defaultByLevel[level] || defaultByLevel.h1,
    weights[weight] || weights.normal,
    className
  )

  return (
    <Tag className= {baseClasses} {...props}>
      {text || children}
    </Tag>
  )
  
}