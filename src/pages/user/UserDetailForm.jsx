// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useUserDetailFormMutation } from "../../redux/hotelUserApi.jsx/userApi";

// const UserDetailForm = () => {
//   const location = useLocation();
//   const { hotel_id, transactionId,aadhaarNumber,response } = location.state || {};
//   console.log(location);

  
//   const [submitUserDetails, { isSuccess, isError, error }] = useUserDetailFormMutation();

//   const [formData, setFormData] = useState({
//     name: "",
//     gender: "",
//     mobile: "",
//     reference_id: "",
//     document_type: "",
//     date_of_birth: "",
//     email: "",
//     house: "",
//     photo_base64: "",
//     room_number: "",
//     check_out_time: "",
//     aadhaarNumber,
//     hotel_id
//   });

//   useEffect(() => {
//     console.log("Response from Aadhaar API:", response); // Debugging log
//     if (response?.aadhaarData) {
//       setFormData((prev) => ({
//         ...prev,
//         name: response.aadhaarData.name || "",
//         gender: response.aadhaarData.gender || "",
//         mobile: response.aadhaarData.mobile || "",
//         email: response.aadhaarData.email || "",
//         date_of_birth: response.aadhaarData.date_of_birth || "",
//         aadhar_number: aadhaarNumber,
//         house: response.aadhaarData.address || "",
//         reference_id: transactionId || "", // Ensure it exists
//         document_type: "Aadhaar",
//         photo_base64: response.aadhaarData.aadhar_image || "",
//         hotel_id
//       }));
//     }
//   }, [response, transactionId]);
  


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const payload = {
//         hotel_id: formData.hotel_id,
//         room_number: formData.room_number,
//         check_out_time: formData.check_out_time,
//         aadhaarData: {
//           name: formData.name,
//           gender: formData.gender,
//           house: formData.house,
//           locality: formData.locality || "",
//           district: formData.district || "",
//           state: formData.state || "",
//           pincode: formData.pincode || "",
//           phone_number: formData.mobile,
//           photo_base64: formData.photo_base64,
//           aadhar_number: formData.aadhaarNumber,
//           date_of_birth: formData.date_of_birth,
//           email: formData.email,
//         },
//       };
  
//       const result = await submitUserDetails(payload).unwrap();
//       console.log("Response:", result);
//     } catch (err) {
//       console.error("Submission error:", err);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto">
//       <div className="flex flex-col">
//         <label htmlFor="name" className="text-sm font-semibold">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="px-4 py-2 border border-gray-300 rounded-lg mt-1"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="gender" className="text-sm font-semibold">Gender</label>
//         <input
//           type="text"
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="px-4 py-2 border border-gray-300 rounded-lg mt-1"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="date_of_birth" className="text-sm font-semibold">Address</label>
//         <input
//           type="text"
//           name="date_of_birth"
//           value={formData.date_of_birth}
//           onChange={handleChange}
//           className="px-4 py-2 border border-gray-300 rounded-lg mt-1"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="date_of_birth" className="text-sm font-semibold">Date of Birth</label>
//         <input
//           type="text"
//           name="date_of_birth"
//           value={formData.house}
//           onChange={handleChange}
//           className="px-4 py-2 border border-gray-300 rounded-lg mt-1"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="room_number" className="text-sm font-semibold">Room Number</label>
//         <input
//           type="text"
//           name="room_number"
//           value={formData.room_number}
//           onChange={handleChange}
//           className="px-4 py-2 border border-gray-300 rounded-lg mt-1"
//         />
//       </div>

//       <div className="flex flex-col">
//   <label htmlFor="check_out_time" className="text-sm font-semibold">
//     Check Out Date & Time
//   </label>
//   <input
//     type="datetime-local"
//     name="check_out_time"
//     value={formData.check_out_time}
//     onChange={handleChange}
//     className="px-4 py-2 border border-gray-300 rounded-lg mt-1"
//   />
// </div>

//       {formData.photo_base64 && (
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Aadhaar Photo</label>
//           <img
//             src={`data:image/jpeg;base64,${formData.photo_base64}`}
//             alt="Aadhaar Image"
//             className="mt-2 border border-gray-300 rounded-lg w-40 h-40 object-cover"
//           />
//         </div>
//       )}

//       {isSuccess && <p className="text-green-600">Submitted successfully!</p>}
//       {isError && <p className="text-red-600">Error: {error?.data?.message || "Submission failed"}</p>}

//       <button type="submit" className="px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default UserDetailForm;






























import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserDetailFormMutation } from "../../redux/hotelUserApi.jsx/userApi";

const UserDetailForm = () => {
  const location = useLocation();
  const { hotel_id, transactionId, aadhaarNumber, response } = location.state || {};
  console.log(location);

  const [submitUserDetails, { isSuccess, isError, error }] = useUserDetailFormMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    mobile: "",
    reference_id: "",
    document_type: "",
    date_of_birth: "",
    email: "",
    house: "",
    photo_base64: "",
    room_number: "",
    check_out_time: "",
    aadhaarNumber,
    hotel_id,
  });

  useEffect(() => {
    console.log("Response from Aadhaar API:", response); // Debugging log
    if (response?.aadhaarData) {
      setFormData((prev) => ({
        ...prev,
        name: response.aadhaarData.name || "",
        gender: response.aadhaarData.gender || "",
        mobile: response.aadhaarData.mobile || "",
        email: response.aadhaarData.email || "",
        date_of_birth: response.aadhaarData.date_of_birth || "",
        aadhar_number: aadhaarNumber,
        house: response.aadhaarData.address || "",
        reference_id: transactionId || "", // Ensure it exists
        document_type: "Aadhaar",
        photo_base64: response.aadhaarData.aadhar_image || "",
        hotel_id,
      }));
    }
  }, [response, transactionId]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 10000); // 10 सेकंड (10000ms)
      
      return () => clearTimeout(timer); // Cleanup function
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        hotel_id: formData.hotel_id,
        room_number: formData.room_number,
        check_out_time: formData.check_out_time,
        aadhaarData: {
          name: formData.name,
          gender: formData.gender,
          house: formData.house,
          locality: formData.locality || "",
          district: formData.district || "",
          state: formData.state || "",
          pincode: formData.pincode || "",
          phone_number: formData.mobile,
          photo_base64: formData.photo_base64,
          aadhar_number: formData.aadhaarNumber,
          date_of_birth: formData.date_of_birth,
          email: formData.email,
        },
      };

      const result = await submitUserDetails(payload).unwrap();
      console.log("Response:", result);
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/justChink.jpeg" // Replace with your company logo path
            alt="Company Logo"
            className="w-32 h-auto"
          />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Details Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-xl">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled
              className="px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender Field */}
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm font-semibold text-gray-700">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              disabled
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Field */}
          <div className="flex flex-col">
            <label htmlFor="house" className="text-sm font-semibold text-gray-700">
              Address
            </label>
            <input
              type="text"
              disabled
              name="house"
              value={formData.house}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date of Birth Field */}
          <div className="flex flex-col">
            <label htmlFor="date_of_birth" className="text-sm font-semibold text-gray-700">
              Date of Birth
            </label>
            <input
                   disabled
              type="text"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date_of_birth" className="text-sm font-semibold text-gray-700">
            AadhaarNumber
            </label>
            <input
              type="text"
              disabled
              name="date_of_birth"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Room Number Field */}
          <div className="flex flex-col">
            <label htmlFor="room_number" className="text-sm font-semibold text-gray-700">
              Room Number
            </label>
            <input
              type="text"
              name="room_number"
              value={formData.room_number}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Check Out Date & Time Field */}
          <div className="flex flex-col">
            <label htmlFor="check_out_time" className="text-sm font-semibold text-gray-700">
              Check Out Date & Time
            </label>
            <input
              type="datetime-local"
              name="check_out_time"
              value={formData.check_out_time}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Aadhaar Photo */}
          {formData.photo_base64 && (
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700">Aadhaar Photo</label>
              <img
                src={`data:image/jpeg;base64,${formData.photo_base64}`}
                alt="Aadhaar Image"
                className="mt-2 border border-gray-300 rounded-lg w-40 h-40 object-cover"
              />
            </div>
          )}

          {/* Success/Error Messages */}
          {isSuccess && (
            <>
            <p className="text-green-600 text-center">Submitted successfully!</p>
            <p className="text-gray-500 text-center mt-2">
            Redirecting in 10 seconds...
          </p>
            </>
          )}
          {isError && (
            <p className="text-red-600 text-center">
              Error: {error?.data?.message || "Submission failed"}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailForm;
