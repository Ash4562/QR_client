import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHotelRegister from "./pages/user/UserHotelRegister";
import GenerateHotelsQr from "./pages/user/GenerateHotelsQr";

import AadhaarOTPForm from "./pages/user/AadhaarOTPForm";
import SubmitOtp from "./pages/user/SumitOtp";
import UserDetailForm from "./pages/user/UserDetailForm";
// import AdminSideBar from "./pages/Admin/AdminSideBar";
// import AdminHotels from "./pages/Admin/AdminHotels";
// import AdminHotelDetails from "./pages/Admin/AdminHotelDetails";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import AdminPendingApprovals from "./pages/Admin/AdminPendingApprovals";
// import AdminPayments from "./pages/Admin/AdminPayments";
// import AdminLogin from "./pages/Admin/AdminLogin";
// import SelectedHotelUsers from "./pages/Admin/SelectedHotelUsers";
// import AllHotelUsers from "./pages/Admin/AllHotelUsers";
// import AdminUserDetails from "./pages/Admin/AdminUserDetails";
// import AdminUserDetailsCard from "./pages/Admin/AdminUserDetailsCard";
// import AdminHotelDetailsCard from "./pages/Admin/AdminHotelDetailsCard";
// import AdminCreateUser from "./pages/Admin/AdminCreateUser";
// import UserDetails from "./pages/Admin/UserDetails";
// import AdminVerify from "./pages/Admin/AdminVerify";
// import ProtectedRoute from "./components/ProtectedRoute";
// import HotelPenApoDetails from "./pages/Admin/HotelPenApoDetails";

const App = () => {

  // const isAuthenticated = !!localStorage.getItem("token");
  // console.log(isAuthenticated);



  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*  */}
          {/* Public Routes
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/AdminVerify" element={<AdminVerify />} />


          <Route
            path="/"
            element={
              <ProtectedRoute >
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminHotels"
            element={
              <ProtectedRoute >
                <AdminHotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminHotelDetails"
            element={
              <ProtectedRoute >
                <AdminHotelDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminCreateUser"
            element={
              <ProtectedRoute >
                <AdminCreateUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UserDetails"
            element={
              <ProtectedRoute >
                <UserDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminPayments"
            element={
              <ProtectedRoute >
                <AdminPayments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminPendingApprovals"
            element={
              <ProtectedRoute >
                <AdminPendingApprovals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/HotelPenApoDetails"
            element={
              <ProtectedRoute >
                <HotelPenApoDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/SelectedHotelUsers/:hotelId"
            element={
              <ProtectedRoute >
                <SelectedHotelUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AllHotelUsers"
            element={
              <ProtectedRoute >
                <AllHotelUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminUserDetails"
            element={
              <ProtectedRoute >
                <AdminUserDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminUserDetailsCard"
            element={
              <ProtectedRoute >
                <AdminUserDetailsCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminHotelDetailsCard"
            element={
              <ProtectedRoute >
                <AdminHotelDetailsCard />
              </ProtectedRoute>
            }
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
                <AadhaarOTPForm />
     
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
