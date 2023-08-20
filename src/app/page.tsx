import Image from 'next/image'

export default function Home () {
  return (
    <>
    <main className='relative w-screen h-[calc(100vh-3.5rem)] overflow-y-hidden' >
      <Image
        src="/bakgroundPizza.png"
        alt=''
        fill
        className='-z-10'
      />




    </main>
      
    </>
  )
}
