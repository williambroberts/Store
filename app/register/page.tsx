

import React from 'react'

import Link from 'next/link'
import { MdClose } from 'react-icons/md'
import { RegisterForm } from '../../components/Auth/Register/RegisterForm'

const RegisterPage = () => {
    
  return (
    <main className='mt-0 flex flex-col 
    items-center justify-center'>
      <Link 
      aria-label='home'
      className='absolute top-4 left-4 text-[var(--t-1)]'
      href="/"><MdClose/></Link>
          <RegisterForm/>
    </main>
  )
}

export default RegisterPage