import Image from "next/image"

const PizzaShape = () => {
  return (
    <div className="flex flex-col items-center text-white" >
      <div className="flex items-center" >
        <Image
          src="/FormaDeMadeira.png"
          alt=""
          width={320}
          height={320}
        />
      </div>
      <div>
        <span className="font-secondary text-xl" >PREÇO DA PIZZA R$ 35.00</span>
      </div>
    </div>
  )
}

export default PizzaShape