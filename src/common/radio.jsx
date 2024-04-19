
import React, { useState } from 'react'

const Radio = () => {
    const [favourite_game,setFavourite_game]  = useState('')
const options  = ["cricket","hockey","football"]
  return (
    <div>

{/* <label  htmlFor="">cricket</label> */}

{options.map((items)=>(
    <>
 <div><input  type='radio' id={items}  name="favourite_game" value={favourite_game} onChange={()=>setFavourite_game(items)} /> <label  htmlFor={items}>{items}</label> </div> 
    </>
))}

<h1>favourite_game is {favourite_game}</h1>
    </div>
  )
}

export default Radio;