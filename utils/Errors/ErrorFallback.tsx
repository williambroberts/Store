"use client"

export const ErrorFallback = () => {
    const reload = ()=>{
        //window.location.reload()
        window.history.go(0)
    }
  return (
    <div>
            <h1>An unexpected Error has occured</h1>
    <button
    className=""
    onClick={reload}>go back</button>
    </div>
  )
}
