import Modal from "react-modal"; // استيراد react-modal
import { FaVoteYea, FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

Modal.setAppElement("#root"); // تعيين العنصر الجذر

function PartyLists() {
  const [party, setParty] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedParty, setSelectedParty] = useState(null);

  useEffect(() => {
    async function fetchPartyLists() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/local/party"
        );
        setParty(response.data);
      } catch (error) {
        console.error("Error fetching party lists:", error);
      }
    }
    fetchPartyLists();
  }, []);

  const handleVoteClick = (party) => {
    setSelectedParty(party);
    setShowPopup(true);
  };

  const handleConfirmVote = async () => {
    try {
      await axios.post("http://localhost:5000/api/local/vote", {
        party_list_id: selectedParty.party_list_id,
      });
      setShowPopup(false);
      // Refresh the party list to show updated vote count
      const updatedParty = await axios.get(
        "http://localhost:5000/api/local/party"
      );
      setParty(updatedParty.data);
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return (
    <>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {party.map((Party) => (
            <div
              key={Party.party_list_id}
              className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "250px",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition duration-300"></div>
              <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
                <h1 className="text-center text-white text-2xl font-bold mb-2">
                  {Party.party_name}
                </h1>
                <h6 className="text-white text-sm">{Party.logo}</h6>
                <p className="text-white text-lg mt-2">
                  الأصوات: {Party.vote_count}
                </p>
              </div>
              <div className="absolute bottom-4 right-4">
                <button
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 shadow-md text-lg flex items-center"
                  onClick={() => handleVoteClick(Party)}
                >
                  <FaVoteYea className="mr-2" /> تصويت
                </button>
              </div>
            </div>
          ))}

          <div
            className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/RFxVNjqP/Rectangle-19.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition duration-300"></div>
            <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
              <span className="text-center text-white text-2xl font-bold">
                ورقة بيضاء
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <button
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 shadow-md text-lg flex items-center"
                onClick={() =>
                  handleVoteClick({
                    party_name: "ورقة بيضاء",
                    party_list_id: "white_paper",
                  })
                }
              >
                <FaVoteYea className="mr-2" /> تصويت
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        contentLabel="تأكيد التصويت"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-2xl font-bold mb-4">تأكيد التصويت</h2>
        <p className="mb-6">
          عملية الانتخاب تتم مرة واحدة فقط. هل أنت متأكد من التصويت لـ{" "}
          {selectedParty?.party_name}؟
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleConfirmVote}
          >
            تأكيد
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setShowPopup(false)}
          >
            إلغاء
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PartyLists;
