

export const ErrorFallback = () => {
    const reload = ()=>{
        //window.location.reload()
        window.history.go(0)
    }
  return (
    <div>ErrorFallback

    <button onClick={reload}>reload /return</button>
    </div>
  )
}
