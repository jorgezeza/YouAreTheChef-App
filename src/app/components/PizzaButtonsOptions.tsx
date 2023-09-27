import Image from "next/image"

import ModalPizzasSizes from "./ModalPizzasSizes"
import ModalPizzasSlices from "./ModalPizzasSlices"
import ModalPizzasFlavours from "./ModalPizzasFlavours"
import { useState } from "react"

import { PizzasSizesProps } from "../page"

const initialValuesPizzasButtonOptions = {
  isOpenModalPizzaSizes: false,
  setOpenModalPizzasSizes: () => { },
  isOpenModalPizzasSlices: false,
  setOpenModalPizzasSlices: () => { },
  isOpenModalPizzasFlavours: false,
  setOpenModalPizzasFlavours: () => { }
}

const PizzaButtonsOptions = ({ currentPizza, pizzasSizes, setCurrentPizza, flavoursOfPizza, setFlavoursOfPizza }:
  {
    currentPizza: PizzasSizesProps,
    pizzasSizes: PizzasSizesProps[],
    setCurrentPizza: any,
    flavoursOfPizza: number,
    setFlavoursOfPizza: any
  }) => {

  const [slicesOfPizza, setSlicesOfPizza] =
    useState(currentPizza.slices[0])


  const [isOpenModalPizzaSizes, setOpenModalPizzasSizes] =
    useState(initialValuesPizzasButtonOptions.isOpenModalPizzaSizes)
  const [isOpenModalPizzasSlices, setOpenModalPizzasSlices] =
    useState(initialValuesPizzasButtonOptions.isOpenModalPizzasSlices)
  const [isOpenModalPizzasFlavours, setOpenModalPizzasFlavours] =
    useState(initialValuesPizzasButtonOptions.isOpenModalPizzasFlavours)



  return (
    <>
      <div className="flex items-center justify-center pt-3 gap-3" >
        <button
          onClick={() => setOpenModalPizzasSizes(prev => !prev)}
          className="flex flex-col p-2 gap-2 bg-primaryColor text-white items-center rounded-md w-74px h-74px"
        >
          <Image
            src="/icons/iconSize.png"
            alt=""
            width={28}
            height={28}
          />
          <span>Tamanho</span>
          <span>{currentPizza.name}</span>
        </button>
        <button
          onClick={() => setOpenModalPizzasFlavours(prev => !prev)}
          className="flex flex-col p-2 gap-2 bg-primaryColor text-white items-center rounded-md w-74px h-74px" >
          <span className="font-secondary text-2xl" >
            {flavoursOfPizza}
          </span>

          <span>Sabores</span>
        </button>
        <button
          onClick={() => setOpenModalPizzasSlices(prev => !prev)}
          className="flex flex-col p-2 gap-2 bg-primaryColor text-white items-center rounded-md w-74px h-74px" >
          <Image
            src="/icons/iconPizzaPedaco.png"
            alt=""
            width={28}
            height={28}
          />
          <span>Cortar</span>
          <span>em {slicesOfPizza}</span>
        </button>
      </div>

      {isOpenModalPizzaSizes &&
        <ModalPizzasSizes
          setOpenModalPizzasSizes={setOpenModalPizzasSizes}
          pizzasSizes={pizzasSizes}
          setCurrentPizza={setCurrentPizza}
        />}

      {isOpenModalPizzasSlices &&
        <ModalPizzasSlices
          setOpenModalPizzasSlices={setOpenModalPizzasSlices}
          setSlicesOfPizza={setSlicesOfPizza}
          currentPizza={currentPizza}
        />}

      {isOpenModalPizzasFlavours &&
        <ModalPizzasFlavours
          setOpenModalPizzasFlavours={setOpenModalPizzasFlavours}
          setFlavoursOfPizza={setFlavoursOfPizza}
          currentPizza={currentPizza}
        />
      }
    </>
  )
}

export default PizzaButtonsOptions