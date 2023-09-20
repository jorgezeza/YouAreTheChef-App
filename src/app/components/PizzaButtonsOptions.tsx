import { useState } from "react"
import Image from "next/image"
import { useDbCollection } from "../hooks"
import ModalPizzasSizes from "./ModalPizzasSizes"
import ModalPizzasSlices from "./ModalPizzasSlices"
import ModalPizzasFlavours from "./ModalPizzasFlavours"

export type PizzasSizesProps = {
  id: string,
  flavours: number[],
  name: string,
  size: number,
  slices: number[]
}

const initialValues = {
  collection: 'pizzasSizes',
  isOpenModalPizzaSizes: false,
  setOpenModalPizzasSizes: () => { },
  currentPizza: {
    id: 'CMYMWyx4e8jZrV2kLPwd',
    name: 'Grande',
    flavours: [1, 2, 3],
    size: 40,
    slices: [4, 8, 16]
  } as PizzasSizesProps,
  setCurrentPizza: () => { },
  isOpenModalPizzasSlices: false,
  setOpenModalPizzasSlices: () => { },
  isOpenModalPizzasFlavours: false,
  setOpenModalPizzasFlavours: () => { }
}

const PizzaButtonsOptions = () => {
  const pizzasSizes =
    useDbCollection<PizzasSizesProps>(initialValues.collection)
    
  const [isOpenModalPizzaSizes, setOpenModalPizzasSizes] =
    useState(initialValues.isOpenModalPizzaSizes)
  const [isOpenModalPizzasSlices, setOpenModalPizzasSlices] =
    useState(initialValues.isOpenModalPizzasSlices)
  const [currentPizza, setCurrentPizza] =
    useState<PizzasSizesProps>(initialValues.currentPizza)
  const [slicesOfPizza, setSlicesOfPizza] =
    useState(initialValues.currentPizza.slices[0])
  const [isOpenModalPizzasFlavours, setOpenModalPizzasFlavours] =
    useState(initialValues.isOpenModalPizzasFlavours)
  const [flavoursOfPizza, setFlavoursOfPizza] =
    useState(initialValues.currentPizza.flavours[0])

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