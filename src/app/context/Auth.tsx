import { createContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import app from '../services/firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
}
  from "firebase/auth"
import { translateError } from "../utiuls/translateErros"

const auth = getAuth(app)

type LoginProps = {
  email: string,
  password: string
}

type CreateAccountProps = {
  name: string,
  email: string,
  password: string
}

type ErrorProps = {
  hasError: boolean,
  errorType: string | undefined
}

type UserProps = {
  isUserLoggedIn: boolean,
  userInfomation: object
}

type AuthContextProps = {
  login: ({ email, password }: LoginProps) => {}
  createUser: ({ name, email, password }: CreateAccountProps) => {}
  loginError: ErrorProps
  setLoginError: ({ hasError, errorType }: ErrorProps) => void
  userInfo: UserProps | null
  setUserInfo: ({ isUserLoggedIn, userInfomation }: UserProps) => void
  auth: typeof auth,
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter()
  const [loginError, setLoginError] = useState<ErrorProps>({} as ErrorProps)
  const [userInfo, setUserInfo] = useState<UserProps>({} as UserProps)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          isUserLoggedIn: !!user,
          userInfomation: { ...user }
        })
        push('/')
      } else {
        console.log('Não está logado')
      }
    })
  }, [])

  const createUser = async ({ name, email, password }: CreateAccountProps) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        updateProfile(auth.currentUser!, {
          displayName: name
        }).catch(() => console.log('Erro ao adicionar o userName'))

        setUserInfo({
          isUserLoggedIn: !!userCredential.user,
          userInfomation: userCredential.user
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

  const login = async ({ email, password }: LoginProps) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setUserInfo({
          isUserLoggedIn: !!userCredential.user,
          userInfomation: userCredential.user
        })
        push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError({ hasError: true, errorType: translateError(error.code) })
      });
  }

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Usuário deslogado')
      push('/pages/login')
    }).catch((error) => {
      // An error happened.
      console.log('Erro ao desolgar', error)
    })
  }

  return <AuthContext.Provider value={{
    login,
    createUser,
    loginError,
    setLoginError,
    userInfo,
    setUserInfo,
    auth,
    logout
  }}>
    {children}
  </AuthContext.Provider>
}

export { AuthContext, AuthProvider }