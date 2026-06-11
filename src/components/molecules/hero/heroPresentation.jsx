import Text from "@/components/atoms/texts";
import Title from "@/components/atoms/titles";
import BtnAction from "./btnsAction";


export default function HeroPresentation() {
    return (
        <div className="relative z-20 container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
            <Title
                level="h1"
                weight="bold"
                className="text-white font-bebas text-5xl md:text-7xl mb-4 tracking-wide max-w-4xl"
                text="Construimos el futuro con presisión BIM"
            />

            <Text
                as="p"
                size="lg"
                className="text-gray-200 font-montserrat max-w-2xl mb-8"
                text="BIM CONSTRUCTIONS J&J S.A.C. Lideramos proyectos de construcción en todo el Perú, combinando innovación tecnológica y excelencia operativa para superar tus expectativas."
            />

            <BtnAction />
        </div>
    )
}