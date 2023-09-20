"use client"

import Image from 'next/image'
import PizzaButtonsOptions from './components/PizzaButtonsOptions'
import PizzaShape from './components/PizzaShape'
import MainPizzaButtonsOptions from './components/MainPizzaButtonsOptions'

import { useDbCollection } from './hooks'
import { useState } from 'react'

export type PizzasSizesProps = {
  id: string,
  flavours: number[],
  name: string,
  size: number,
  slices: number[]
}

export type InitialValuesProps = {
  collection: string,
  currentPizza: PizzasSizesProps,
  setCurrentPizza: () => void,
}

export const initialValues = {
  collection: 'pizzasSizes',
  currentPizza: {
    id: 'CMYMWyx4e8jZrV2kLPwd',
    name: 'Grande',
    flavours: [1, 2, 3],
    size: 40,
    slices: [4, 8, 16]
  } as PizzasSizesProps,
  setCurrentPizza: () => { },
}

export default function Home () {
  const pizzasSizes = useDbCollection<PizzasSizesProps>(initialValues.collection)

  const [currentPizza, setCurrentPizza] =
    useState<PizzasSizesProps>(initialValues.currentPizza)

  const [flavoursOfPizza, setFlavoursOfPizza] =
    useState(currentPizza.flavours[0])

  return (
    <>
      <main className='relative w-screen flex-1' >
        <div className='w-full h-full' >
          <Image
            src="/bakgroundPizza.png"
            alt=""
            fill
            className='-z-10 object-cover'
          />
        </div>
        <PizzaButtonsOptions
          currentPizza={currentPizza}
          pizzasSizes={pizzasSizes}
          setCurrentPizza={setCurrentPizza}
          flavoursOfPizza={flavoursOfPizza}
          setFlavoursOfPizza={setFlavoursOfPizza}
        />
        <PizzaShape
          flavoursOfPizza={flavoursOfPizza}
        />
        <MainPizzaButtonsOptions />
      </main>
    </>
  )
}
