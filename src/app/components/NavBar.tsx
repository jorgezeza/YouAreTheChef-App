import Image from "next/image"
import Link from "next/link"

const NavBar = ({ openMenu }:any) => {
  console.log('Open Menu:', openMenu)
  return (
    <div className={`bg-black w-1/2 h-screen text-white md:w-1/3 lg:w-1/6 relative -left-[999px] transition-all ease-in-out duration-1000 ${openMenu ? 'menu__transition' : ''}`}>
      <div className="relative flex flex-col text-5xl font-secondary">
        <div className="absolute -top-5 right-0" >
          <Image
            src='/chefLogo.png'
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-12" >
          <span>Você é</span>
          <span>o Chef</span>
        </div>
      </div>
      <nav className="px-6" >
      <ul className="text-base" >
        <li className="p-3" >
          <Link href='#' >Cardápio</Link>
        </li>
        <li className="p-3" >
          <Link href='#' >Meu Carrinho</Link>
        </li>
        <li className="p-3" >
          <Link href='#' >Meus Pedidos</Link>
        </li>
        <li className="p-3" >
          <Link href='#' >Minha Conta</Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar