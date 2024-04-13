
import { useState } from 'react';

// export  const usePhoneTextfield = () => {
  
//     // console.log(setverifyPage,'setverifypage')
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [error, setError] = useState("");
  
//   const handleContinue = () => {
//   const phoneRegex = /^[6-9]\d{9}$/;
    
//       if (!phoneRegex.test(phoneNumber)) {       
//         setError("Please enter a valid phone number ");
//        // setverifyPage(false); 
//       } else {
//         setError("");
//         //setverifyPage(true); 
//       }
  
//     };
  

//     return {handleContinue,error,phoneNumber,setPhoneNumber}
// }


export const  usePhoneTextfield = (setverifyPage)=>{
// console.log(setverifyPage,'setverifyPage')  
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");

    const handleContinue = () => {
        const phoneRegex = /^[6-9]\d{9}$/;
          
            if (!phoneRegex.test(phoneNumber)) {       
              setError("Please enter a valid phone number ");
             setverifyPage(false); 
           
            } else {
              setError("");
              setPhoneNumber("")
              setverifyPage(true); 
            }
        
          };


          return {handleContinue,error,phoneNumber,setPhoneNumber}
  }
