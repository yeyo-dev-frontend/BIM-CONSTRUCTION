import Image from "next/image";

export function ImageLogo() {
    return (
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-md">
            <Image
                src=""
                alt="Logo Corporativo"
                width={48}
                height={48}
                className="object-contain"
            />
        </div>
    )
}