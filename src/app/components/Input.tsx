import Image from "next/image"
import { InputHTMLAttributes, forwardRef, useId } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
  img?: string,
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name = '', type = 'text', img = '', helperText = '', ...props }, ref) => {
    const inputId = useId()
    const hasError = helperText.length > 0
    return (
      <>
        <label htmlFor={inputId} className="flex p-2 gap-2 bg-thirdColor/20 border-b border-b-white/20">
          <Image
            src={img}
            alt=""
            width={28}
            height={28}
          />
          <input
            id={inputId}
            type={type}
            name={name}
            ref={ref}
            {...props}
            className="w-full text-white bg-transparent outline-none"
          />
        </label >
        {hasError && <p className="text-red-700" >{helperText}</p>}
      </>
    )
  })