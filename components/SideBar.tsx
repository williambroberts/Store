import React from 'react'
import { Hamburger } from './Hamburger'

export const SideBar = () => {
  return (
    <section className='sidebar'>
        <Hamburger
        open={true}
        />
    </section>
  )
}
