import NavMenu from "@/components/molecules/navbar/navMenu";
import BtnContactanos from "@/components/molecules/navbar/btnContactanos";

export default function MobileMenuPanel({ menu, onClose }) {
    return (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col px-4 py-6 gap-2">
            <NavMenu
                menu={menu}
                orientation="vertical"
                onItemClick={onClose}
            />
            <BtnContactanos className="pt-4 px-2" onClick={onClose} />
        </div>
    );
}
