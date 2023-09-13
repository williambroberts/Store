"use client"

import React from 'react'

const Error = () => {
  const reload = ()=>{
    //window.location.reload()
    window.history.go(0)
}
return (
<main className='flex flex-col items-center gap-2 '>
        <h1 className='my-4 font-semibold'>An unexpected Error has occured</h1>
<button
className="product__card__add"
onClick={reload}>go back</button>
</main>
)
}


export default Error