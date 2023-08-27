import Image from "next/image"
import Link from "next/link"

const Login = () => {
  return (
    <div className="relative top-0 left-0 w-full h-screen overflow-auto">
      <div className="absolute w-full h-full -z-10" >
        <Image
          src="/backgroundLogin.png"
          alt=""
          fill
          objectFit="cover"
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

      <div className="mb-8" >
        <form action="" className=" flex flex-col gap-2 px-6 text-x" >
          <label className="flex p-2 gap-2 bg-inputColor/20 border-b border-b-white/20" >
            <Image
              src="/icons/iconEmail.png"
              alt=""
              width={28}
              height={28}
            />
            <input type="text" placeholder="Email adrress" className="w-full  text-white bg-transparent outline-none" />
          </label>

          <label className="flex p-2 gap-2 bg-inputColor/20 border-b border-b-white/20" >
            <Image
              src="/icons/iconPassword.png"
              alt=""
              width={28}
              height={28}
            />
            <input type="password" placeholder="Password" className="w-full  text-white bg-transparent outline-none" />
          </label>

          <button className="text-2xl text-white py-1 bg-secondary mt-4" >Sing In</button>
          <div className="flex justify-center text-white" >
            <Link href='/' className="text-sm border-b border-b-white/20" >Forgot your password</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login