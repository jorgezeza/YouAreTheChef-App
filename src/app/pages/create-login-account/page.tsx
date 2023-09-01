'use client'

import Image from "next/image"
import CreateAccount from "@/app/components/CreateAccount"

const CreateLoginAccount = () => {
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
    <CreateAccount />
  </div>
  )
}

export default CreateLoginAccount