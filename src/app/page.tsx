import Image from 'next/image'
import PizzaButtonsOptions from './components/PizzaButtonsOptions'
import PizzaShape from './components/PizzaShape'
import MainPizzaButtonsOptions from './components/MainPizzaButtonsOptions'

export default function Home () {
  return (
    <>
      <main className='relative w-screen h-[calc(100vh-3.5rem)]' >
        <div className='w-full absolute' >
          <Image
            src="/bakgroundPizza.png"
            alt=""
            fill
            className='-z-10'
          />
        </div>
        <PizzaButtonsOptions />
        <PizzaShape />
        <MainPizzaButtonsOptions />
      </main>

    </>
  )
}
