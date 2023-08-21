"use client"
import { useState } from "react"
import Image from "next/image"
import NavBar from "./NavBar"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <header className="flex items-center w-full h-14 bg-primaryColor text-white px-6 " >
        <div className="flex items-center gap-2 text-2xl " >
          <button className={`relative w-8 h-8`} onClick={() => setOpenMenu(!openMenu)}>
            <Image
              src='./Icons/Menuhamburguer.svg'
              alt=""
              fill
            />
          </button>
          <span>MINHA PIZZA</span>
        </div>
      </header>
      <NavBar openMenu={openMenu} />
    </>
  )
}

export default Header