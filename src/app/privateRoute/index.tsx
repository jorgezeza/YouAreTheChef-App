import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import { useAuth } from "../hooks"
import APP_ROUTES from "../constants/app-routes"

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({children}: PrivateRouteProps) => {
  const { userInfo } = useAuth()
  const { push } = useRouter()

  const isUserAuthenticated = userInfo?.isUserLoggedIn

  useEffect(() => {
    if(!isUserAuthenticated) {
      push(APP_ROUTES.public.login)
    }
  }, [isUserAuthenticated, push])

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}

export default PrivateRoute