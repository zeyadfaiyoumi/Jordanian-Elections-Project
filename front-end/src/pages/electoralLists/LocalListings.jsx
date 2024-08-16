// import { FaVoteYea, FaSearch } from "react-icons/fa"; // FontAwesome icons for voting and search
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const LocalListings = () => {
//   const [data1, setData] = useState([]);

//   const fetchLocaLlisting = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/local/listing"
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching tasks:", error.response?.data);
//     }
//   };

//   useEffect(() => {
//     fetchLocaLlisting();
//   }, []);

//   return (
//     <div className="p-8">
//       {/* Search Bar */}
//       <div className="mb-8 flex justify-center">
//         <div className="relative w-full max-w-md">
//           <input
//             type="text"
//             placeholder="أدخل الاسم الكامل أو اسم المخرج"
//             className="border border-gray-300 rounded-lg p-3 w-full shadow-lg focus:ring-2 focus:ring-primary focus:outline-none pl-10 text-center"
//             style={{ height: "50px" }} // Slightly increased height
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <FaSearch className="text-gray-500" />
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Local List Cards */}
//         {data1.map((data2) => (
//           <div
//             key={data2.id}
//             className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
//             style={{
//               backgroundImage:
//                 "url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: "250px", // Reduced height
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition duration-300">
//               <Link to="/Voteforcandidates">
//                 <div className="relative z-10 p-4 flex items-center justify-center h-full">
//                   <span className="text-center text-white text-xl font-bold">
//                     {data2.list_name}
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}

//         {/* White Paper Card */}
//         <div
//           className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
//           style={{
//             backgroundImage:
//               "url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "250px", // Reduced height
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition duration-300"></div>
//           <div className="relative z-10 p-4 flex items-center justify-center h-full">
//             <span className="text-center text-white text-xl font-bold">
//               ورقة بيضاء
//             </span>
//           </div>
//           <div className="absolute bottom-4 left-4">
//             <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg p-3 shadow-lg text-lg flex items-center">
//               <FaVoteYea className="mr-2" /> تصويت
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocalListings;

import { FaVoteYea, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const LocalListings = () => {
  const [lists, setLists] = useState([]);
  const { districtId } = useParams();
  const navigate = useNavigate();

  const fetchLists = async (districtId) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/local/lists",
        {
          params: {
            district_id: districtId,
          },
        }
      );
      setLists(response.data);
    } catch (error) {
      console.error(
        "Error fetching lists:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    if (districtId) {
      fetchLists(districtId);
    }
  }, [districtId]);

  const handleCardClick = (listId) => {
    navigate(`/lists/${listId}`);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="أدخل الاسم الكامل أو اسم المخرج"
            className="border border-gray-300 rounded-lg p-3 w-full shadow-lg focus:ring-2 focus:ring-primary focus:outline-none pl-10 text-center"
            style={{ height: "50px" }}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lists.map((list) => (
          <div
            key={list.list_id}
            className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => handleCardClick(list.list_id)}
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition duration-300">
              <div className="relative z-10 p-4 flex items-center justify-center h-full">
                <span className="text-center text-white text-xl font-bold">
                  {list.list_name}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div
          className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition duration-300"></div>
          <div className="relative z-10 p-4 flex items-center justify-center h-full">
            <span className="text-center text-white text-xl font-bold">
              ورقة بيضاء
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg p-3 shadow-lg text-lg flex items-center">
              <FaVoteYea className="mr-2" /> تصويت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalListings;
