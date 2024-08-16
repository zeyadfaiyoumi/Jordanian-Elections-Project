import Voting from "./pages/electoralLists/voting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocalListings from "./pages/electoralLists/LocalListings";
import Electoraldistricts from "./pages/electoralLists/ElectoralDistricts";
import PartyLists from "./pages/electoralLists/party_lists";
import Modal from "react-modal";
import PaymentComponent from "./pages/payment/payment";

// بعد الاستيراد، تحتاج إلى تعيين العنصر الجذر للتأكد من أن المودال يظهر بشكل صحيح.
Modal.setAppElement("#root"); // أو أي عنصر جذر آخر في تطبيقك

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Districts" element={<Electoraldistricts />} />
        <Route path="/Voting" element={<Voting />} />
        <Route path="/lists/:districtId" element={<LocalListings />} />
        <Route path="/party_lists" element={<PartyLists />} />
        <Route path="/PaymentComponent" element={<PaymentComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
