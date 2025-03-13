// import React, { useState } from "react";
// import { useSearchParams } from "react-router-dom"; // ✅ Use search params
// import { toast } from "react-toastify";
// import { useGenerateAadhaarOTPMutation } from "../../redux/hotelUserApi.jsx/userApi";

// const AadhaarOTP = () => {
//   const [searchParams] = useSearchParams();
//   const hotelId = searchParams.get("hotelId") || ""; // ✅ Extract hotelId from URL

//   console.log("Hotel ID in AadhaarOTP:", hotelId); // Debugging

//   const [aadhaarNumber, setAadhaarNumber] = useState("");
//   const [generateOTP, { data, isLoading, error }] = useGenerateAadhaarOTPMutation();

//   const handleGenerateOTP = async () => {
//     if (!aadhaarNumber || aadhaarNumber.length !== 12) {
//       toast.error("Enter a valid 12-digit Aadhaar number");
//       return;
//     }

//     try {
//       const response = await generateOTP({ aadhaarNumber, hotelId }).unwrap(); // ✅ Pass hotelId to API
//       toast.success("OTP Sent Successfully! Transaction ID: " + response.transactionId);
//     } catch (err) {
//       toast.error("Failed to send OTP. Try again.");
//     }
//   };

//   return (
//     <div
//       className="h-screen w-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/loginBG.jpeg')` }}
//     >
//       <div className="text-white flex items-center justify-center h-screen">
//         <div className="p-6 sm:py-8 md:p-10 bg-white rounded-[30px] md:rounded-[50px] w-full max-w-lg">
//           <div className="rounded-[15px] sm:py-4 xs:py-4 md:rounded-[20px] shadow-xl shadow-[#FFFFFF7A] flex flex-col w-full bg-gradient-to-t from-[#004FC2] to-[#00255C] px-4 md:p-20">
//             <h2 className="text-xl font-bold mb-2">Generate Aadhaar OTP</h2>
//             <input
//               type="text"
//               placeholder="Enter Aadhaar Number"
//               value={aadhaarNumber}
//               onChange={(e) => setAadhaarNumber(e.target.value)}
//               className="w-full py-2 border-b border-opacity-60 font-poppins font-light text-sm sm:text-base leading-6 bg-transparent focus:outline-none focus:border-[#1562D8] text-[#D9D9D9]"
//             />
//             <button
//               onClick={handleGenerateOTP}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               disabled={isLoading}
//             >
//               {isLoading ? "Generating OTP..." : "Generate OTP"}
//             </button>

//             {error && <p className="text-red-500 mt-2">Error generating OTP</p>}
//             {data && <p className="text-green-500 mt-2">Transaction ID: {data.transactionId}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AadhaarOTP;


import React, { useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useGenerateAadhaarOTPMutation } from "../../redux/hotelUserApi.jsx/userApi";

const AadhaarOTPForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const hotel_id_from_state = location.state?.hotel_id || "";
  const hotel_id_from_token = searchParams.get("token") || "";
  const hotel_id = hotel_id_from_state || hotel_id_from_token || "No Hotel ID Found";

  console.log("location", location);
  console.log("Hotel ID in AadhaarOTP:", hotel_id); // Debugging

  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [generateOTP, { data, isLoading, error }] = useGenerateAadhaarOTPMutation();

  const handleGenerateOTP = async () => {
    if (!aadhaarNumber || aadhaarNumber.length !== 12) {
      toast.error("Enter a valid 12-digit Aadhaar number");
      return;
    }

    try {
      const response = await generateOTP({ aadhaarNumber, hotel_id }).unwrap();
      const transactionId = response.transactionId;

      toast.success("OTP Sent Successfully!");
      navigate("/SubmitOtp", {
        state: { hotel_id, transactionId, aadhaarNumber },
      });
    } catch (err) {
      toast.error("Failed to send OTP. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="flex justify-center mb-6">
        <img src="/justChink.jpeg" alt="Company Logo" className="w-20 sm:w-24 h-auto" />
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700">
          Generate Aadhaar OTP
        </h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleGenerateOTP}
          className="w-full mt-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Generating OTP..." : "Generate OTP"}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">Error generating OTP</p>}
        {data && (
          <p className="text-green-500 text-sm mt-2">
            OTP Sent! Transaction ID: {data.transactionId}
          </p>
        )}
      </div>
    </div>
  );
};

export default AadhaarOTPForm;
