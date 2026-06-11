import Button from "@/components/atoms/buttons";
import Link from "next/link";

export default function BtnAction() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
                <Button
                    variant="primary"
                    size="lg"
                    className="w-full font-montserrat font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform cursor-pointer"
                    text="Cotizar Proyecto"
                />
            </Link>

            <Link href="/proyects" className="w-full sm:w-auto">
                <Button
                    variant="secondary"
                    size="lg"
                    className="w-full font-montserrat font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform cursor-pointer"
                    text="Nuestros Proyectos"
                />
            </Link>
        </div>
    )
}