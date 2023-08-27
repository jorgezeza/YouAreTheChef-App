import { createContext, useState } from "react"
import app from '../services/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const AuthContext = createContext({})
const auth = getAuth(app);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState('jorgenunes@gmail.com')
  const [password, setPassword] = useState('123456')
  const [user, setUser] = useState<any | null>()


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      setUser(userCredential.user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })

  return (
    <AuthContext.Provider value={{
      user,
      auth
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }