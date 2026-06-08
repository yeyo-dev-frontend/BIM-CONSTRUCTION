import Button from "@/components/atoms/buttons";
import { CloseIcon, MenuIcon } from "@/components/atoms/icons";

export default function MobileMenuToggle({ isOpen, onToggle }) {
    return (
        <Button
            variant="ghost"
            className="gap-0 md:hidden px-2! hover:text-bim-blue transition-transform cursor-pointer"
            leftIcon={isOpen ? <CloseIcon /> : <MenuIcon />}
            onClick={onToggle}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        />
    );
}
