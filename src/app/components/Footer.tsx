import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flex justify-center items-center fixed w-full text-white bg-secondary h-12 gap-2 bottom-0">
      <Image
        src="/icons/iconCarrinho.png"
        alt=""
        width={24}
        height={24}
      />
      <span className="font-secondary text-2xls " >Adicionar ao carrinho</span>
    </footer>
  )
}

export default Footer