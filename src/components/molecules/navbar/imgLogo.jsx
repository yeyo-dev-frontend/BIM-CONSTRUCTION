import Image from "next/image";

export function ImageLogo() {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-md">
      <Image
        src="/images/LOGO_BIM.png"
        alt="Logo Corporativo"
        width={60}
        height={60}
        className="object-contain w-auto h-auto"
      />
    </div>
  )
}