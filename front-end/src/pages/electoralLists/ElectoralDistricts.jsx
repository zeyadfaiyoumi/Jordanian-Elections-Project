// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Electoraldistricts() {
//   const [Datadistricts, Setdistricts] = useState([]);

//   const districts = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/Electoral/districts"
//       );
//       Setdistricts(response.data);
//     } catch (error) {
//       console.error("Error fetching tasks:", error.response?.data);
//     }
//   };

//   useEffect(() => {
//     districts();
//   }, []);

//   return (
//     <Link to="/LocalListings">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Datadistricts.map((district, index) => (
//           <div
//             key={index}
//             className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
//             style={{
//               backgroundImage:
//                 "url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: "250px",
//             }}
//           >
//             <h1 className>{district.district_name}</h1>
//           </div>
//         ))}
//       </div>
//     </Link>
//   );
// }

// export default Electoraldistricts;
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdFlag } from "react-icons/md"; // أيقونة علم
import { FaStar } from "react-icons/fa"; // أيقونة الشعار العربي افتراضية

function ElectoralDistricts() {
  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDistricts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/local/districts"
        );
        setDistricts(response.data);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    }
    fetchDistricts();
  }, []);

  const handleDistrictSelect = (districtId) => {
    navigate(`/lists/${districtId}`);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        الدوائر الانتخابية
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {districts.map((district) => (
          <div
            key={district.district_id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleDistrictSelect(district.district_id)}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-500 to-green-300 bg-opacity-80 flex items-center justify-center text-white text-lg font-bold p-4"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <div className="flex items-center">
                <MdFlag className="mr-2 text-xl" /> {/* أيقونة علم */}
                <span className="mr-2">{district.district_name}</span>
                <FaStar className="text-xl" /> {/* أيقونة الشعار العربي */}
              </div>
            </div>
            <div
              className="bg-black bg-opacity-10 h-64"
            >
              {/* Optional: Add background color if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElectoralDistricts;
