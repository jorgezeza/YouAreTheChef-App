import Image from "next/image"
import Link from "next/link"

const NavBar = ({ openMenu }:any) => {
  return (
    <div className={`container__nav-menu ${openMenu ? 'menu__transition' : ''}`}>
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