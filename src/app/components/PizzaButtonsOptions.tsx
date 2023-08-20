import Image from "next/image"

const PizzaButtonsOptions = () => {
  return (
    <div className="flex items-center justify-center pt-3 gap-3" >
      <div className="flex flex-col p-2 gap-2 bg-primaryColor text-white items-center rounded-md w-74px h-74px" >
        <Image
          src="/icons/iconSize.png"
          alt=""
          width={28}
          height={28}
        />
        <span>Tamanho</span>
      </div>
      <div className="flex flex-col p-2 gap-2 bg-primaryColor text-white items-center rounded-md w-74px h-74px" >
        <span className="font-secondary text-2xl" >2</span>
        <span>Sabores</span>
      </div>
      <div className="flex flex-col p-2 gap-2 bg-primaryColor text-white items-center rounded-md w-74px h-74px" >
        <Image
          src="/icons/iconPizzaPedaco.png"
          alt=""
          width={28}
          height={28}
        />
        <span>Cortar</span>
      </div>
    </div>
  )
}

export default PizzaButtonsOptions