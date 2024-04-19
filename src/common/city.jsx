
import React, { useState } from 'react'

const City = () => {

    const [country,setcountry]  = useState('India')

const countries = [{name:'India',value:'in',cities:['delhi','mumbai']},{name:'Pakistan',value:'pak',cities:['karachi','lahore']}]
// const findcities = countries.find((items)=>items.name===country)?.cities.map((items)=>items)  
const findcities = countries.find((items)=>items.name===country)
// console.log(findcities,'find')


  return(
    <div>


<select  onChange={(e)=>setcountry(e.target.value)} > 
{countries&&countries.map((items)=>(
    <>
   
        <option  key={items.name}  value={items.name}   >{items.name}</option>


  
    </>
))}
 </select>

{/* {countries.map((item)=>(
   item.cities.map((cities)=>(
    <h1>{cities}</h1>
   )) 
))} */}


 <select  onChange={(e)=>setcity(e.target.value)}  > 
{findcities.cities&&findcities.cities.map((items)=>(
    <>
   
        <option  value={items} >{items}</option>


  
    </>
))}
 </select>




    </div>


  )
}

export default City;