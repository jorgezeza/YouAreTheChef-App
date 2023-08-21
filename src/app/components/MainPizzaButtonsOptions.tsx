import Image from "next/image"
const MainPizzaButtonsOptions = () => {
  return (
    <div className="flex flex-col gap-4 px-6" >
      <div className="flex font-secondary text-xl bg-white rounded-full " >
        <div className="flex justify-center items-center bg-primaryColor w-11 h-11 rounded-tl-xl rounded-bl-xl rounded-tr-lg" >
          <Image 
            src="/icons/fechar.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className="flex items-center flex-1 pl-1" >
          <span>Calabresa Especial</span>
        </div>
        <div className="flex justify-center items-center w-11 h-11" >
          <Image
            src="/icons/iconLapis.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="flex font-secondary text-xl bg-white rounded-full " >
        <div className="flex justify-center items-center bg-primaryColor w-11 h-11 rounded-tl-xl rounded-bl-xl rounded-tr-lg" >
          <Image 
            src="/icons/fechar.png"
            alt=""
            width={20}
            height={20}
          />
        </div>

        <div className="flex items-center flex-1 pl-1" >
          <span>Portuguesa</span>
        </div>
        <div className="flex justify-center items-center w-11 h-11" >
          <Image
            src="/icons/iconLapis.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="flex font-secondary text-xl bg-white rounded-full " >
        <div className="flex justify-center items-center bg-blue-900 w-11 h-11 rounded-tl-xl rounded-bl-xl rounded-tr-lg" >
          <Image 
            src="/icons/fechar.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className="flex items-center flex-1 pl-1" >
          <span>Massa tradicional</span>
        </div>
        <div className="flex justify-center items-center w-11 h-11" >
          <Image
            src="/icons/iconLapis.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>

    </div>
  )
}

export default MainPizzaButtonsOptions