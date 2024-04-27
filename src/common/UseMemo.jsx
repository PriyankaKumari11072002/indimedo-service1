import React  from 'react'
import  useEffect from 'react'
import {useState}  from 'react'
const UseMemo = () => {
    const [first,setFirst] = useState()
    const [second,setSecond] = useState()

    const handleFirst = ()=>{
setFirst('hello first')
console.log('first')
    }

    const handleSecond = ()=>{
        setSecond('hello second')
        console.log('second')
    }

    // const unwantedFunCall = useEffect(()=>{
       // The reason for this behavior is that React's state updates are batched by default. This means that if multiple setState calls are made within the same synchronous block of code (such as a click event handler), React will batch them together and only perform one render. Therefore, your useEffect callback will only execute once per batch of state updates.
    //  console.log('...again again first updated')

    //     // setFirst('unwanted')
    //     console.log('unwantedFunCall  whenever state will update this fun will re-render again ,stop unwanted fun call')
    //     // return first.slice(0,2)
    // },[first])
    
    const unwantedFunCall = ()=>{
        console.log('...again again first updated')
   
           // setFirst('unwanted')
           console.log('unwantedFunCall  whenever state will update this fun will re-render again ,stop unwanted fun call')
           // return first.slice(0,2)
       }
    // useEffect(() => {
    //     // This effect will execute whenever `first` changes
    //     unwantedFunCall();
    // }, [first]);
  return (
    <>
    <div  onClick={handleFirst}>

first
    </div>

    <div  onMouseOver={unwantedFunCall}>

    unwantedFunCall
    </div>
     

{unwantedFunCall}
<div  onKeyUp={handleSecond}>
second

</div>
</>
)
  
}

export default UseMemo
