import img from "../../assets/Group 40.png";
import img1 from "../../assets/ProfileIcon.png";
import hotelsImg from "../../assets/hotels.svg";
import AdminSideBar from "./AdminSideBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchLogout from "../../components/SearchLogout";
import { useGetUsersQuery } from "../../redux/adminApi/userApis";

const SelectedHotelUsers = () => {
  const { hotelId } = useParams(); // Get hotelId from URL params
  const { data, isLoading, isError, error } = useGetUsersQuery(); // Fetch all users
  const navigate = useNavigate();
  // Filter users for the selected hotel
  const filteredUsers = data?.customers?.filter(
    (user) => user.hotel_id === hotelId || user.hotel_id?._id === hotelId
  );
  // console.log(filteredUsers[0].c_id
  // );

  if (isLoading) {
    return <p className="text-center text-blue-500 mt-10">Loading users...</p>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>Error fetching users!</p>
        <p>{error?.data?.message || "Something went wrong. Please try again."}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <SearchLogout className="w-full flex flex-row items-center justify-between py-4 sm:py-20" />

        {/* Content */}
        <main className="flex-1 mx-4 bg-[#ecf8f9] rounded-2xl">
          {/* Hotel Info */}
          <div className="bg-[#ecf8f9] p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center">
              <div className=" w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold sm:mb-0 sm:mr-4">
                <img src={hotelsImg} alt="Icon" className="w-20 h-20" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl text-start text-black font-bold">
                  {filteredUsers?.[0]?.hotel_id.hotelName || "Hotel Name Not Available"}
                </h2>
                <p className="text-start text-gray-500">
                  {filteredUsers?.[0]?.address || "Address Not Available"}
                </p>
              </div>
            </div>
          </div>

          {/* Customer Cards */}
          <div className="bg-[#ECF8F9] p-4">
            {filteredUsers?.length > 0 ? (
              <div
                className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 p-8 gap-10 overflow-y-auto"
                style={{ maxHeight: "400px" }} // Adjust height as needed
              >
                {filteredUsers.map((user, index) => (
                  <button
                    // to={`/AdminUserDetailsCard/${user.c_id}`} // Navigate to user de
                    onClick={() =>
                      navigate("/AdminUserDetailsCard", { state: filteredUsers[index].c_id })
                    }
                    key={index}
                    className="bg-white w-64 shadow rounded-2xl py-2 px-1 text-center"
                  >
                    <div className="flex justify-center items-center mb-4">
                    <img
                    // src={img1}
                    src={`data:image/jpeg;base64,${user.aadhar_image}`}
                    alt="Profile Icon"
                    className="w-28 h-28 object-cover rounded-full"
                  />
                    </div>
                    <h3 className="text-lg font-bold">{user.customer_name}</h3>
                    <p>{user.aadhar_number}</p>
                    {/* <p>{user.phone_number}</p> */}
                    <p>XXXXXXXXXX</p>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center p-8">
                No users found for this hotel.
              </p>
            )}
          </div>
        </main>
      </div >
    </div >
  );
};

export default SelectedHotelUsers;