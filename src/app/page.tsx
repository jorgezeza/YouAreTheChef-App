import Image from 'next/image'
import PizzaButtonsOptions from './components/PizzaButtonsOptions'
import PizzaShape from './components/PizzaShape'
import MainPizzaButtonsOptions from './components/MainPizzaButtonsOptions'

export default function Home () {
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
        <PizzaButtonsOptions />
        <PizzaShape />
        <MainPizzaButtonsOptions />
      </main>

    </>
  )
}
