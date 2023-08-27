"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import PizzaButtonsOptions from './components/PizzaButtonsOptions'
import PizzaShape from './components/PizzaShape'
import MainPizzaButtonsOptions from './components/MainPizzaButtonsOptions'

import { collection, addDoc, getDocs  } from "firebase/firestore";
import { db } from './services/firebase'

console.log('DBbbbbbbb:', db)

const getDocsDb = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function Home () {

  useEffect(() => {
    const func = async() => {
      const querySnapshot = await getDocs(collection(db, "pizzasFlavours"));
      querySnapshot.forEach((doc) => {
        console.log('AQUiiiiii:', `${doc.id} => ${doc.data()}`);
        console.log(doc.data());
      });
    }

    func()
  }, [])


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
        <div>

          <button onClick={getDocsDb} className='bg-green-500 p-7'>Enviar</button>

        </div>
        <PizzaButtonsOptions />
        <PizzaShape />
        <MainPizzaButtonsOptions />
      </main>

    </>
  )
}
