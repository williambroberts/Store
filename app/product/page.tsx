import React from 'react'
import useStore from '../../zustand/store'

export const ProductPage = () => {
    const product = useStore(state=>state.product)
  return (
    <div>

    </div>
  )
}
