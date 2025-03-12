// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useUserHotelRegisterMutation } from "../../redux/hotelUserApi.jsx/userApi";
// import { toast } from "react-toastify";

// const UserHotelRegister = () => {
//   const navigate = useNavigate();
//   const [registerHotel, { data, isSuccess, isError, error }] = useUserHotelRegisterMutation();
  
//   const [userData, setUserData] = useState({
//     hotelName: "",
//     registrationNumber: "",
//   });

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (!userData.hotelName || !userData.registrationNumber) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     registerHotel(userData);
//   };

//   useEffect(() => {
//     if (isSuccess && data?.hotelId) {
//       toast.success("Hotel registered successfully!");
//       navigate("/GenerateHotelsQr", { state: { hotel_id: data.hotelId } });
//     }

//     if (isError) {
//       toast.error(error?.data?.message || "Registration failed");
//     }
//   }, [isSuccess, isError, data, error, navigate]);

//   return (
//     <div
//       className="h-screen w-screen bg-cover bg-center"
//       style={{
//         backgroundColor:"red",
//         backgroundImage: `url('/loginBG.jpeg')`,
//       }}
//     >
//       <div className="text-white flex items-center justify-center h-screen">
//         <div className="p-6 sm:py-8 md:p-10 bg-white rounded-[30px] md:rounded-[50px] w-full max-w-lg">
//           <div className="rounded-[15px] sm:py-4 xs:py-4 md:rounded-[20px] shadow-xl shadow-[#FFFFFF7A] flex flex-col w-full bg-gradient-to-t from-[#004FC2] to-[#00255C] px-4 md:p-20">
//           <div className="flex justify-center mb-6">
//           <img
//             src="/justChink.jpeg" // Replace with your company logo path
//             alt="Company Logo"
//             className="w-32 h-auto"
//           />
//         </div>
//             <Link
//               to="/login"
//               className="text-lg sm:text-xl md:text-2xl leading-6 py-2 font-semibold font-poppins text-center bg-gradient-to-t from-[#1562D8] to-[#85D200] mb-6 bg-clip-text text-transparent"
//             >
//               Find Hotel
//             </Link>
           
//             <form className="flex flex-col space-y-4 sm:space-y-6 w-full gap-4">
//               <input
//                 placeholder="Hotel Name"
//                 type="text"
//                 name="hotelName"
//                 value={userData.hotelName}
//                 onChange={handleChange}
//                 className="w-full py-2 border-b border-opacity-60 font-poppins font-light text-sm sm:text-base leading-6 bg-transparent focus:outline-none focus:border-[#1562D8] text-[#D9D9D9]"
//               />
//               <input
//                 placeholder="Registration Number"
//                 type="text"
//                 name="registrationNumber"
//                 value={userData.registrationNumber}
//                 onChange={handleChange}
//                 className="w-full py-2 border-b border-opacity-60 font-poppins font-light text-sm sm:text-base leading-6 bg-transparent focus:outline-none focus:border-[#1562D8] text-[#D9D9D9]"
//               />
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="py-2 px-2 mx-28 bg-white text-[#1562D8] font-poppins font-semibold text-sm sm:text-base rounded-[30px] md:rounded-[40px] hover:bg-[#003a96]"
//               >
//                 Find Hotel
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHotelRegister;




import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserHotelRegisterMutation } from "../../redux/hotelUserApi.jsx/userApi";
import { toast } from "react-toastify";

const UserHotelRegister = () => {
  const navigate = useNavigate();
  const [registerHotel, { data, isSuccess, isError, error }] = useUserHotelRegisterMutation();

  const [userData, setUserData] = useState({
    hotelName: "",
    registrationNumber: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!userData.hotelName || !userData.registrationNumber) {
      toast.error("Please fill in all fields");
      return;
    }

    registerHotel(userData);
  };

  useEffect(() => {
    if (isSuccess && data?.hotelId) {
      toast.success("Hotel registered successfully!");
      navigate("/GenerateHotelsQr", { state: { hotel_id: data.hotelId } });
    }

    if (isError) {
      toast.error(error?.data?.message || "Registration failed");
    }
  }, [isSuccess, isError, data, error, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/justChink.jpeg" alt="Company Logo" className="w-20 sm:w-24 h-auto" />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700">
          Register Your Hotel
        </h2>

        {/* Form */}
        <form className="mt-6 space-y-4">
          <input
            placeholder="Hotel Name"
            type="text"
            name="hotelName"
            value={userData.hotelName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            placeholder="Registration Number"
            type="text"
            name="registrationNumber"
            value={userData.registrationNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200"
          >
            Register Hotel
          </button>
        </form>

        {/* Find Hotel Link */}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-600 hover:underline text-sm sm:text-base">
            Already registered? Find Hotel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHotelRegister;
