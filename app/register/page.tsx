

import React from 'react'

import Link from 'next/link'
import { MdClose } from 'react-icons/md'
import { RegisterForm } from '../../components/Auth/RegisterForm'

const RegisterPage = () => {
    
  return (
    <main className='mt-0 flex flex-col 
    items-center justify-center'>
      <Link 
      className='absolute top-4 left-4 text-[var(--t-1)]'
      href="/"><MdClose/></Link>
          <RegisterForm/>
    </main>
  )
}

export default RegisterPage