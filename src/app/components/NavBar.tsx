import Image from "next/image"
import Link from "next/link"
import { useAuth } from "../hooks"

const NavBar = ({ openMenu }: any) => {
  const {logout} = useAuth()
  return (
    <div className={`container__nav-menu ${openMenu ? 'menu__transition' : ''}`}>
      <div className="relative flex flex-col text-5xl font-secondary w-full h-20 divide-y-2 divide-y-reverse divide-white/5">
        <div className="absolute -top-5 right-0" >
          <Image
            src='/chefLogo.png'
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-12 mb-16" >
          <span>Você é</span>
          <span>o Chef</span>
        </div>
      </div>
      <nav className="px-6 w-full" >
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

      <div className="self-end w-full flex items-center justify-center mb-8">
        <button onClick={() => logout()}>
          Logout
        </button>
      </div>

    </div>
  )
}

export default NavBar