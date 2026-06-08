import Text from "@/components/atoms/texts";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function NavMenu({
    menu = [],
    className = "",
    orientation = "horizontal",
    onItemClick,
}) {
    const isVertical = orientation === "vertical";

    return (
        <ul
            className={twMerge(
                isVertical ? "flex flex-col" : "flex items-center gap-8",
                className
            )}
        >
            {menu.map((item) => (
                <li key={item.id}>
                    <Link
                        href={item.href}
                        className={twMerge(
                            "group flex items-center transition-colors",
                            isVertical
                                ? "py-4 border-b border-gray-50 active:bg-gray-50 rounded-sm px-2"
                                : "py-2"
                        )}
                        onClick={onItemClick}
                    >
                        <Text
                            as="span"
                            variant="primary"
                            weight="medium"
                            className={twMerge(
                                "font-montserrat transition-colors duration-300",
                                isVertical
                                    ? "text-lg active:text-bim-orange" 
                                    : "group-hover:text-bim-orange"    
                            )}
                        >
                            {item.text}
                        </Text>
                    </Link>
                </li>
            ))}
        </ul>
    );
}