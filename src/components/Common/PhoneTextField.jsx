import { Box ,TextField} from '@mui/material'
import React from 'react'

const PhoneTextField = ({phoneNumber,setPhoneNumber,handleContinue,error,redirectSignupPage,signup,redirectloginPage,inPhone,hidden,style,sx}) => {
  const conditionalStyle = {"& > :not(style)": { m: 1, width: "25ch" }}
  
 const sxStyle  = sx?  sx : conditionalStyle 
  return (
    <div style={style} >
   <Box
              component="form"
              // sx={{
              //   "& > :not(style)": { m: 1, width: "25ch" },
              // }}
           
              // className='m-4  w-72'
          sx={sxStyle}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{ marginTop: "10px" }}
                id="standard-basic"
                label="Enter Email Id or Mobile Number"
                variant="standard"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />

{error && <p style={{ color: 'red' }}>{error}</p>}

              <button
                onClick={handleContinue}
                type="button"
                className="w-[100%] bg-sky-500 p-2 text-black"
              >
                Continue
              </button>
              

              <p>
                New on Indimedo Website?{" "}
                </p>
{/* 
{inPhone?'not visible':'visible'} */}
  <div className={hidden ? "hidden" : ""}>
  {signup?(<> <div className=" text-sky-500 mt-2  "  type="button"  style={{}} onClick={redirectSignupPage}>
Login
                </div>

              <p  className='hid'>

              By signing up, I agree to the Privacy Policy,Terms and Conditions of Indimedo Website.

              </p></>):(<>
                <div
                  type="button"
                 onClick={redirectSignupPage}
                  className=" text-sky-500 mt-2 "
                >
                SignUp
                </div>
                <p>
                  By Login, I agree to the Privacy Policy,Terms and
                  Conditions of Indimedo Website.
                </p>          
              </>)}

         {/* {inPhone?(<p>  By signing up, I agree to the Privacy Policy,Terms and Conditions of Indimedo Website.</p>):''}      */}
  </div>


             
            </Box>

    </div>
  )
}

export default PhoneTextField