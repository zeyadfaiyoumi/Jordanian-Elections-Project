import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Nav from "../../component/Nav";
import Footer from "../../component/footer";

function PartyLists() {
  const [party, setParty] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPartyLists() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/local/party"
        );
        setParty(response.data);
      } catch (error) {
        console.error("Error fetching party lists:", error);
        setError("حدث خطأ أثناء تحميل البيانات");
      }
    }
    fetchPartyLists();
  }, []);

  const handleVoteClick = async (partyItem) => {
    const result = await Swal.fire({
      title: "تأكيد التصويت",
      text: "عملية الانتخابات تتم مرة واحدة فقط. هل أنت متأكد أنك تريد الانتخاب؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "تأكيد",
      cancelButtonText: "إلغاء",
    });

    if (result.isConfirmed) {
      try {
        await axios.post("http://localhost:5000/api/local/vote", {
          party_list_id: partyItem.party_list_id,
        });
        Swal.fire("تم التصويت!", "تم تسجيل التصويت بنجاح.", "success");
        // Refresh the party list to reflect the new vote count
        const response = await axios.get(
          "http://localhost:5000/api/local/party"
        );
        setParty(response.data);
      } catch (error) {
        console.error("Error submitting vote:", error);
        Swal.fire("خطأ!", "حدث خطأ أثناء تسجيل التصويت.", "error");
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="أدخل الاسم الكامل أو اسم الحزب"
              className="border border-gray-300 rounded-lg p-3 w-full shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none pl-10 text-center"
              style={{ height: "50px" }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
        </div>

        {error && <p className="text-center text-red-500">{error}</p>}

        {party.length === 0 ? (
          <p className="text-center text-gray-500">
            لا توجد قوائم حزبية متاحة حاليًا
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {party.map((partyItem) => (
              <div
                key={partyItem.party_list_id}
                className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "250px",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition duration-300"></div>
                <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
                  <h1 className="text-center text-white text-2xl font-bold mb-2">
                    {partyItem.party_name}
                  </h1>
                  <h6 className="text-white text-sm">{partyItem.logo}</h6>
                  <p className="text-white text-lg mt-2">
                    الأصوات: {partyItem.vote_count}
                  </p>
                  <button
                    onClick={() => handleVoteClick(partyItem)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    تصويت
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PartyLists;
