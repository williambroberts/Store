import {v4} from "uuid"
type theProps ={
  text:string;
}
export const Hero = ({text}:theProps) => {
  let nums = Array(60).fill(1)
  nums = nums.map(i=>{
    return Math.floor(Math.random() * 100)/10
  })
  return (
    <div className='hero'>
       
        <div className="lines">
          {nums.map((item,index)=> <div 
         
          className="line" key={v4()}>
            <div 
            style={{animationDelay:`${item}s`}}
            className="line__after"></div>
          </div>)}
         
        </div>
        <h1
        className='title'
        aria-label=''
        role=''
        >{text}</h1>
    </div>
  )
}
