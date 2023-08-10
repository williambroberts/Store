

import React from 'react'
import { LoginForm } from '../../components/Auth/LoginForm'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'

const LoginPage = () => {
    
  return (
    <main className='mt-0 flex flex-col 
    items-center justify-center'>
      <Link 
      className='absolute top-4 left-4 text-[var(--t-2)]'
      href="/"><MdClose/></Link>
          <LoginForm/>
    </main>
  )
}

export default LoginPage