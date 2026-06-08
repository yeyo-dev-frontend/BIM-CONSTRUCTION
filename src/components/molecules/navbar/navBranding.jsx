import Link from "next/link";
import { ImageLogo } from "@/components/molecules/navbar/imgLogo";
import TitleCorporation from "@/components/molecules/navbar/titleCorporation";

export default function NavBranding({ onClick }) {
    return (
        <Link 
            href="/" 
            className="flex items-center gap-3 transition-opacity hover:opacity-90" 
            onClick={onClick}
        >
            <ImageLogo />
            <TitleCorporation />
        </Link>
    );
}
