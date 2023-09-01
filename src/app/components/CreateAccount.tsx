import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from './Input'

import { useAuth } from '../hooks'

const schema = z.object({
  name: z.string().min(3, 'Nome de usuário inválido.'),
  email: z.string().email({message: 'Email inválido.'}),
  password: z.string().min(3, 'A senha deve ter no mínimo 3 caracteres.'),
  confirmPassword: z.string().min(3, 'A senha deve ter no mínimo 3 caracteres.')
}).refine((fields) => fields.password === fields.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas precisam ser iguais.'
})

type InputProps = z.infer<typeof schema>

const CreateAccount = () => {
  const { createUser } = useAuth()
  const {register, handleSubmit, formState: { errors }} = useForm<InputProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })
  return (
    <div className="mb-8" >
      <form onSubmit={handleSubmit(({name, email, password}) => createUser({name, email, password}))} className=" flex flex-col gap-2 px-6 text-x" >
        <Input
          {...register('name')}
          type='text'
          placeholder='Digite seu username'
          img='/icons/iconUser.png'
          helperText={errors.name?.message}
        />

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

        <Input
          {...register('confirmPassword')}
          type='password'
          placeholder='Confirme sua senha'
          img='/icons/iconPassword.png'
          helperText={errors.confirmPassword?.message}
        />

        <button className="text-2xl text-white py-1 bg-secondary mt-4" >Register</button>
      </form>
    </div>
  )
}

export default CreateAccount