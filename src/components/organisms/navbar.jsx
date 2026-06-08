import Link from "next/link";
import Image from "next/image";
import Title from "../atoms/titles";

export default function Navbar ({menu}) {
  const name1 = 'BIM'
  const name2= 'CONSTRUCTION'

  return(
    <>
      <nav className=" flex items-center justify-between  px-30 h-[5em] bg-gray-100">
        <Link href='/' className="flex items-center justify-center">
        <Image
          src=''
          alt="Logo Corporativo"
        />
        <div>
          <Title
            level="h2"
            weight="bold"
            variant="primary"
            className="font-bebas"
            text={name1}
          />
          <Title
            level="h3"
            variant="secondary"
            className="font-bebas"
            weight="normal"
            text={name2}
          />
        </div>
      </Link>
      <ul className="flex cursor-pointer
      ">
          {
            menu.map((item) =>{
              return (
                <li key={item.id} className="px-10 flex items-center
                  hover hover:bg-gray-200 duration-300 transition-colors h-[5em]
                ">
                  <Link href={item.href} className="font-montserrat">
                    {item.text}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}