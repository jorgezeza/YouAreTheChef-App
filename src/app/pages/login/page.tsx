'use client'
import Image from "next/image"
import SingIn from "@/app/components/SingIn"
import Link from "next/link"

const Login = () => {
  return (
    <div className="relative top-0 left-0 w-full h-full overflow-auto">
      <div className="absolute w-full h-full -z-10" >
        <Image
          src="/backgroundLogin.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="flex justify-center mt-8 mb-8" >
        <Image
          src="/userAccount.png"
          alt=""
          width={250}
          height={250}
        />
      </div>

      <SingIn />

      <div className="flex justify-center text-white my-2" >
        <Link href='/' className="text-sm border-b border-b-white/20" >Forgot your password</Link>
      </div>

      <div className='flex justify-center items-center px-5 '>
        <Link href="/pages/create-login-account" className="text-2xl text-white text-center bg-primaryColor w-full py-1" >Create account</Link>
      </div>

    </div>
  )
}

export default Login