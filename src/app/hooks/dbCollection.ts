import { useEffect, useState } from "react"

import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../services/firebase"

const useDbCollection = <T>(nameCollection: string) => {
  const [datas, setDatas] = useState<T[]>([])

  useEffect(() => {
    const func = async () => {
      const querySnapshot = await getDocs(collection(db, nameCollection))
      querySnapshot.forEach((doc) => {
        setDatas((prev => [...prev, doc.data() as T]))
      });
    }
    func()
  }, [])

  return datas
}
export default useDbCollection