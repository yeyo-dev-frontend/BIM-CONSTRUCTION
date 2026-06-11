import HeroPresentation from "../molecules/hero/heroPresentation";

export default function Hero() {
    return(
        <section className="relative w-full h-[86vh] min-h-120 flex items-center justify-center overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{backgroundImage: "url('https://nexoinmobiliario.pe/blog/wp-content/uploads/2019/09/1139135938838711.RTU298ajLUfTH7m06wMJ_height640.png')"}}
            />

            <div className="absolute inset-0 bg-gray-900/70 z-10" />

            <HeroPresentation />
        </section>
    )
}