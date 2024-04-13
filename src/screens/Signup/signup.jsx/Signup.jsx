import { Box, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePhoneTextfield } from "../../../utils/helperFun/phoneTextfield";
import PhoneTextField from "../../../components/Common/PhoneTextField";

const Signup = ({

  loginPage,
  verifyPage,
  setverifyPage,
  redirectloginPage
}) => {


  const {error,phoneNumber,setPhoneNumber,handleContinue} = usePhoneTextfield(setverifyPage)



  return (
    <>
      <div>
        {loginPage && !verifyPage && (
          <div className="w-[100%]   px-3 py-1">
            <h1 className="pb-2  text-black">Sign up</h1>
            <div className="pb-2  text-gray-600">
              Sign up to access your orders, special offers, health tips and
              more!
              {/* <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
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
                <p>New on Indimedo Website? </p>
                <div
                  type="button"
                 onClick={redirectloginPage}
                  className=" text-sky-500 mt-2 "
                >
                  Login
                </div>
                <p>
                  By signing up, I agree to the Privacy Policy,Terms and
                  Conditions of Indimedo Website.
                </p>
              </Box> */}
                <PhoneTextField  redirectSignupPage={redirectloginPage}   handleContinue={handleContinue}
       error={error}  setPhoneNumber={setPhoneNumber}  phoneNumber={phoneNumber} signup={true}
       />


            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
