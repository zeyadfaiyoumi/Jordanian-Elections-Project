import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
