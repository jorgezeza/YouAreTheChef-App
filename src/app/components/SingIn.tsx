import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from './Input'
import { useAuth } from '../hooks'

const schema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
  password: z.string().min(3, 'A senha deve ter no minímo 3 caracteres.')
})

type DataProps = z.infer<typeof schema>

const SingIn = () => {
  const { login, loginError, setLoginError } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })

  return (
    <div className="mb-8" >
      <form
        onClick={() => setLoginError({ hasError: false, errorType: '' })}
        onSubmit={handleSubmit(({ email, password }) => login({ email, password }))}
        className=" flex flex-col gap-2 px-6" >
        <Input
          {...register('email')}
          type='email'
          placeholder='Digite seu Email'
          img='/icons/iconEmail.png'
          helperText={errors.email?.message}
        />

        <Input
          {...register('password')}
          type='password'
          placeholder='Digite sua senha'
          img='/icons/iconPassword.png'
          helperText={errors.password?.message}
        />

        {loginError.hasError &&
          <p className='text-red-900'>
            {loginError.errorType}
          </p>
        }
        <button className="text-2xl text-white py-1 bg-secondary mt-4" >Sing In</button>
      </form>
    </div>
  )
}

export default SingIn