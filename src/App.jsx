import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import InputForm from "./components/InputForm";
import ResultsPage from "./components/ResultsPage";
import About from "./components/About";
import FAQ from "./components/FAQ";
import WhatWeDo from "./components/WhatWeDo";
import ChatBotPage from "./components/ChatBotPage"; // ✅ make sure this is imported
import MarketCategoryPage from "./components/MarketCategoryPage";
import FruitsPricePage from "./components/FruitsPricePage";
import VegetablesPricePage from "./components/VegetablesPricePage";
import FarmDashboard from "./components/FarmDashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Show LoginPage only at /login */}
        {!user && (
          <>
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}

        {/* Show actual app pages only after login */}
        {user && (
          <>
            <Route path="/" element={<LandingPage user={user} />} />
            <Route path="/form" element={<InputForm />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/chat" element={<ChatBotPage />} />
            <Route path="/market" element={<MarketCategoryPage />} />
            <Route path="/market/fruits" element={<FruitsPricePage />} />
            <Route path="/market/vegetables" element={<VegetablesPricePage />} />
            <Route path="/myfarm" element={<FarmDashboard user={user} />} />

          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
