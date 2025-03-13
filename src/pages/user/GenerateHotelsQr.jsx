import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGenerateQRMutation } from "../../redux/hotelUserApi.jsx/userApi";

const GenerateHotelsQr = () => {
  const location = useLocation();
  const hotelIdFromLocation = location.state?.hotel_id || "";
  const [hotel_id, setHotel_id] = useState(hotelIdFromLocation);
  const [generateQR, { data, isLoading, error }] = useGenerateQRMutation();

  useEffect(() => {
    if (hotel_id) {
      console.log("Calling API with:", { hotel_id });
      generateQR({ hotel_id });
    }
  }, [hotel_id, generateQR]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/justChink.jpeg" alt="Company Logo" className="w-20 sm:w-24 h-auto" />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700">
          Scan this QR Code
        </h2>

        {/* QR Code Section */}
        <div className="mt-4 flex flex-col items-center">
          {isLoading && <p className="text-gray-500">Generating QR Code...</p>}
          {error && <p className="text-red-500 mt-2">Error generating QR</p>}
          {data && (
            <>
              <img src={data.qrCode} alt="QR Code" className="w-40 sm:w-48 h-auto" />
              <p className="text-sm text-gray-600 mt-2">Scan this QR Code or visit:</p>
              <Link
                to={`/AadhaarOTP?token=${hotel_id}`}
                className="text-blue-500 text-sm sm:text-base"
              >
                {data.qrUrl}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateHotelsQr;


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useGenerateQRMutation } from "../../redux/hotelUserApi.jsx/userApi";

// const GenerateHotelsQr = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const hotelIdFromLocation = location.state?.hotel_id || "";
//   console.log("Received hotel_id from location:", hotelIdFromLocation);
//   const [hotel_id, setHotel_id] = useState(hotelIdFromLocation);
//   const [generateQR, { data, isLoading, error }] = useGenerateQRMutation();
//   // console.log(data.qrUrl);
  
//   useEffect(() => {
//     if (hotel_id) {
//       console.log("Calling API with:", { hotel_id });
//       generateQR({ hotel_id });
//     }
//   }, [hotel_id, generateQR]);
  
//   const handleNavigate = () => {
//     console.log("Navigating with hotel_id:", hotel_id);
    
//     if (hotel_id) {
//       navigate("/AadhaarOTP", { state: { hotel_id } });
//     } else {
//       alert("Error: Hotel ID missing!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
//         <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700">
//           Scan this QR Code
//         </h2>

//         <div className="mt-4 flex flex-col items-center">
//           {isLoading && <p className="text-gray-500">Generating QR Code...</p>}
//           {error && <p className="text-red-500 mt-2">Error generating QR</p>}

//           {data && (
//             <>
//               <img src={data.qrCode} alt="QR Code" className="w-40 sm:w-48 h-auto" />
//               <p className="text-sm text-gray-600 mt-2">Scan this QR Code or visit:</p>
//               <button
//                 onClick={handleNavigate}
//                 className="text-blue-500 text-sm sm:text-base"
//               >
//                 {data.qrUrl}
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenerateHotelsQr;



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useGenerateQRMutation } from "../../redux/hotelUserApi.jsx/userApi";

// const GenerateHotelsQr = () => {
//   const location = useLocation();
//   const hotelIdFromLocation = location.state?.hotelId || "";
  
//   console.log("Received hotelId:", hotelIdFromLocation); // Debugging

//   const [hotelId, setHotelId] = useState(hotelIdFromLocation);
//   const [generateQR, { data, isLoading, error }] = useGenerateQRMutation();

//   useEffect(() => {
//     if (hotelId) {
//       console.log("Calling API with:", { hotelId }); // Debugging
//       generateQR({ hotelId }); // ✅ Correct format
//     }
//   }, [hotelId, generateQR]);

//   return (
//     <div
//     className="h-screen w-screen bg-cover bg-center"
//     style={{
//       backgroundImage: `url('/loginBG.jpeg')`,
//     }}
//   >
//     <div className="text-white flex items-center justify-center h-screen">
//       <div className="p-6 sm:py-8 md:p-10 bg-white rounded-[30px] md:rounded-[50px] w-full max-w-lg">
//     <div className="flex flex-col items-center p-4">
//       <h2 className="text-xl font-bold mb-2">Generate QR Code</h2>

//       {isLoading && <p>Generating QR Code...</p>}
//       {error && <p className="text-red-500 mt-2">Error generating QR</p>}

//       {data && (
//         <div className="mt-4">
//           <img src={data.qrCode} alt="QR Code" className="w-40 h-40" />
//           <p className="text-sm mt-2">Scan this QR Code or visit:</p>
//           <a href="/AadhaarOTP" target="_blank" rel="noopener noreferrer" className="text-blue-500">
//             {data.qrUrl}
//           </a>
//         </div>
//       )}
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default GenerateHotelsQr;
