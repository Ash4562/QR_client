import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHotelRegister from "./pages/user/UserHotelRegister";
import GenerateHotelsQr from "./pages/user/GenerateHotelsQr";
import AadhaarOTP from "./pages/user/AadhaarOTPForm";
import SubmitOtp from "./pages/user/SumitOtp";
import UserDetailForm from "./pages/user/UserDetailForm";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*  */}
          {/* Public Routes
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/AdminVerify" element={<AdminVerify />} />

          /> */}
          <Route
            path="/"
            element={
                <UserHotelRegister />
     
            }
          /> 
          <Route
            path="/GenerateHotelsQr"
            element={
                <GenerateHotelsQr />
     
            }
          /> 
          <Route
            path="/AadhaarOTP"
            element={
              <AadhaarOTP />
     
            }
          /> 
        
          <Route
            path="/SubmitOtp"
            element={
                <SubmitOtp />
     
            }
          /> 
          <Route
            path="/UserDetailForm"
            element={
                <UserDetailForm />
     
            }
          /> 

          {/* 404 Page */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
    // 
  );
};

export default App;
