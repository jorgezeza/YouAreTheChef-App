import { useState } from "react"

const OneFlavour = () => {
  return (
    <div className="absolute bg-black/40 rounded-full w-[200px] h-[200px] m-auto -left-1/2 -right-1/2 flex " >
      <div className="bg-red-700/20 w-full" onClick={() => console.log('1 Sabor')}>Esquerda</div>
    </div>
  )
}

const TwoFlavours = () => {
  return (
    <div className="absolute bg-black/40 rounded-full w-[200px] h-[200px] m-auto -left-1/2 -right-1/2 flex " >
      <div className="bg-red-700/20 w-full" onClick={() => console.log('Esqueda')}>Esquerda</div>
      <div className="bg-blue-700/20 w-full" onClick={() => console.log('Direita')}>Direita</div>
    </div>
  )
}

const ThreeFlavours = () => {
  return (
    <div className="absolute bg-black/40 rounded-full w-[200px] h-[200px] m-auto -left-1/2 -right-1/2 flex " >
      <div className="bg-purple-700/20 rotate-45 absolute -top-14 left-7 w-36 h-36" onClick={() => console.log('De Cima')}>De Cima</div>
      <div className="bg-red-700/20 w-full" onClick={() => console.log('Esqueda')}>Esquerda</div>
      <div className="bg-blue-700/20 w-full" onClick={() => console.log('Direita')}>Direita</div>
    </div>
  )
}

const FourFlavours = () => {
  return (
    <div className="absolute bg-black/40 rounded-full w-[200px] h-[200px] m-auto -left-1/2 -right-1/2 flex flex-wrap" >
      <div className="bg-purple-700/20 w-1/2" onClick={() => console.log('Esquerda Cima')}>Esquerda Cima</div>
      <div className="bg-green-700/20 w-1/2" onClick={() => console.log('Direita Cima')}>Direita Cima</div>
      <div className="bg-yellow-700/20 w-1/2" onClick={() => console.log('Esquerda Baixo')}>Esquerda Baixo</div>
      <div className="bg-blue-700/20 w-1/2" onClick={() => console.log('Direita Baixo')}>Direita Baixo</div>
    </div>
  )
}

const PizzaShapeQuantity = ({ flavoursOfPizza }: { flavoursOfPizza: number }) => {
  return (
    <div className="absolute bg-black/40 rounded-full w-[200px] h-[200px] m-auto -left-1/2 -right-1/2 flex " >
      {flavoursOfPizza === 1 ? <OneFlavour /> : null}
      {flavoursOfPizza === 2 ? <TwoFlavours /> : null}
      {flavoursOfPizza === 3 ? <ThreeFlavours /> : null}
      {flavoursOfPizza === 4 ? <FourFlavours /> : null}
    </div>
  )
}

export default PizzaShapeQuantity