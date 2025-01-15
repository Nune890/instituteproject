import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router";
import DoubleDegree from "./components/doubleDegree/DoubleDegree";
import Doctoral from "./components/doctoral/Doctoral";
import Fac from "./components/fac/Fac";
import ContactUs from "./components/contactUs/ContactUs";
import ProfessionalStudy from "./components/professionalStudy/ProfessionalStudy";
import Engineering from "./components/engineering/Engineering";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainBox">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/double-degree" element={<DoubleDegree />} />
          <Route path="/doctoral" element={<Doctoral />} />
          <Route path="/faq" element={<Fac/>}/>
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/professional-study" element={<ProfessionalStudy/>}/>
          <Route path="/engineering" element={<Engineering/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
