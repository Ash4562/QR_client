import React, { useState } from "react";

import SearchIcon from "../../assets/Search.svg";
import hotelsImg from "../../assets/hotels.svg";
import users from "../../assets/usersSvg.svg";
import PaymentsHand from "../../assets/paymentsHand.svg";
import PendingApprovals from "../../assets/pendingApprovals.svg";
import { Link, useNavigate } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import { CiSearch } from "react-icons/ci";
import { useAdminlogoutMutation } from "../../redux/adminApi/authApi";
import { toast } from "react-toastify";
import { useGetHotelsQuery } from "../../redux/adminApi/adminHotels";
import SearchLogout from "../../components/SearchLogout";
import { useGetUsersQuery } from "../../redux/adminApi/userApis";


const AdminDashboard = () => {


  const { data, isLoading, error } = useGetHotelsQuery();
  const { data: getuser } = useGetUsersQuery();
  const { data: penApuHotels } = useGetHotelsQuery();
  const pendingHotels = penApuHotels?.hotel?.filter((hotel) => hotel.status === "pending");
  const count = pendingHotels?.length

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching hotels!</p>;
  }

  // Ensure the data is an array
  const hotels = data?.hotel || []; // Adjust this to match your API response structure

  // Calculate count of hotels with status "approve"
  const approvedCount = hotels.filter((hotel) => hotel.status === "approve").length;


  return (
    <div className="flex ">
      <AdminSideBar />
      {/* Main Content */}
      <div className="flex flex-col w-full px-6 bg-white shadow-md border rounded-lg sm:mt-20 md:mt-0 h-screen">
        <SearchLogout className="w-full flex flex-row items-center justify-between py-4 sm:py-20" />
        <div className="w-full h-full rounded-lg bg-[#ECF8F9] px-3 pt-3 overflow-y-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/AdminHotels"
              className="bg-white text-center rounded-lg p-4 flex flex-col items-center shadow"
            >
              <img className="" src={hotelsImg} alt="Hotels" />
              <p className="text-[#0060EC] font-poppins font-semibold text-xl leading-8 py-2">
                Hotels
              </p>
              <p className="text-black font-poppins font-semibold text-4xl leading-[55px]">
                {approvedCount}
              </p>
            </Link>
            <Link
              to="/AllHotelUsers"
              className="bg-white text-center rounded-lg p-4 flex flex-col items-center shadow"
            >
              <img className="" src={users} alt="Users" />
              <p className="text-[#0060EC] font-poppins font-semibold text-xl leading-8 py-2">
                Users
              </p>
              <p className="text-black font-poppins font-semibold text-4xl leading-[55px]">
                {getuser?.customers?.length}
              </p>
            </Link>
            <Link
              to="/AdminPayments"
              className="bg-white text-center rounded-lg p-4 flex flex-col items-center shadow"
            >
              <img className="" src={PaymentsHand} alt="Payments" />
              <p className="text-[#0060EC] font-poppins font-semibold text-xl leading-8 py-2">
                Payments
              </p>
              <p className="text-black font-poppins font-semibold text-4xl leading-[55px]">
                1000
              </p>
            </Link>
            <Link
              to="/AdminPendingApprovals"
              className="bg-white text-center rounded-lg p-4 flex flex-col items-center shadow"
            >
              <img
                className=""
                src={PendingApprovals}
                alt="Pending Approvals"
              />
              <p className="text-[#0060EC] font-poppins font-semibold text-xl leading-8 py-2">
                Pending Approvals
              </p>
              <p className="text-black font-poppins font-semibold text-4xl ">
                {count}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
