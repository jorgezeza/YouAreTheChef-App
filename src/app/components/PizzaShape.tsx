import Image from "next/image"
import PizzaShapeQuantity from "./PizzaShapeQuantity"

const PizzaShape = ({ flavoursOfPizza }:
  { flavoursOfPizza: number }) => {
  return (
    <div className="flex flex-col items-center text-white" >
      <div className="flex items-center relative" >
        <PizzaShapeQuantity flavoursOfPizza={flavoursOfPizza} />
        <Image
          src={{
            1 : '/FormaDeMadeira.png',
            2 : '/FormaDeMadeiraDois.svg',
            3 : '/FormaDeMadeiraTres.svg',
            4 : '/FormaDeMadeiraQuatro.svg',
          }[flavoursOfPizza || '/FormaDeMadeira.png']}
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




//"/FormaDeMadeira.png"

// (() => {
//   switch (flavoursOfPizza) {
//     case 2: return '/FormaDeMadeiraDois.svg';
//     case 3: return '/FormaDeMadeiraTres.svg';
//     case 4: return '/FormaDeMadeiraQuatro.svg';
//     default: return '/FormaDeMadeira.png'
//   }
// })()