import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import TaskReminder from "./TaskReminder";


import farmer1 from "../assets/farmer1.jpg";
import farmer2 from "../assets/farmer2.jpg";
import farmer3 from "../assets/farmer3.jpg";

const images = [
  { src: farmer1, caption: "Happy farmer with tomato yield" },
  { src: farmer2, caption: "Smiling after organic paddy harvest" },
  { src: farmer3, caption: "Chickpea success with intercropping" },
];

export default function LandingPage({ user }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="pt-20 min-h-screen w-full bg-gradient-to-b from-stone-100 via-stone-50 to-lime-100 flex flex-col items-center justify-start py-10 px-6">
      {/* Hero Title */}
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-5xl md:text-6xl font-extrabold text-lime-700 drop-shadow-md">🌱 SowSure</h1>
        {user?.username && (
          <p className="mt-2 text-lime-800 text-sm italic">
            👋 Welcome, {user.username} from {user.location}!
          </p>
        )}
        <h2 className="text-xl md:text-2xl text-amber-900 mt-4 max-w-3xl">
          <Typewriter
            words={[
              "Smart Farming for Everyone.",
              "Empowering Soil and Sustainability.",
              "Maximizing Yield with AI.",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>
      
      <TaskReminder
        tasks={[
          "💧 Time to water your tomato field.",
          "🌱 Apply organic compost to your chickpea bed.",
          "🧪 Test soil pH for your upcoming paddy rotation.",
          "☀️ Weeding scheduled for coriander section today.",
          "🚜 Plan irrigation — forecast shows no rain tomorrow.",
        ]}
      />

      {/* Carousel */}
      <div className="relative w-full max-w-4xl" data-aos="fade-up" data-aos-delay="100">
        <img
          src={images[current].src}
          alt={`Slide ${current}`}
          className="rounded-2xl shadow-xl object-cover h-[360px] w-full transition-all duration-500"
        />
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-lime-800 font-bold px-3 py-2 rounded-full shadow"
        >
          ⬅️
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-lime-800 font-bold px-3 py-2 rounded-full shadow"
        >
          ➡️
        </button>
        <p className="text-center mt-3 text-gray-700 italic">{images[current].caption}</p>
      </div>

      {/* CTA Card */}
      <div
        className="mt-12 w-full max-w-xl bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-lime-300"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <h2 className="text-2xl font-bold text-lime-800 mb-2">Why SowSure?</h2>
        <ul className="text-amber-900 list-disc list-inside space-y-1 text-sm">
          <li>Smart crop recommendations based on soil, water, and past usage</li>
          <li>Guided intercropping & rotation plans</li>
          <li>Organic manure suggestions & profit forecast</li>
          <li>Designed for sustainability and small farmers</li>
        </ul>

        <div className="mt-6 text-center">
          <button className="w-full sm:w-auto text-lg px-6 py-3 rounded-full bg-lime-600 hover:bg-lime-700 text-white transition-all duration-300">
            🚜 Start Planning Now
          </button>

        </div>
      </div>

      {/* Market Price Button */}
      <div className="mt-4 text-center">
        <button
          onClick={() => navigate("/market")}
          className="bg-white text-lime-700 border border-lime-600 px-6 py-3 text-lg rounded-full hover:bg-lime-100 transition-all shadow"
        >
          🛒 Check Market Prices
        </button>
      </div>

      {/* Bottom Info */}
      <div className="mt-20 text-gray-700 text-sm text-center max-w-3xl" data-aos="fade-up" data-aos-delay="300">
        <p>
          SowSure supports <span className="font-semibold text-lime-700">SDG 2, 12 & 13</span> with smarter, sustainable farming.
          Built by <span className="font-semibold text-lime-800">Team Thunders ⚡</span> for those who feed the world.
        </p>
      </div>

      {/* ChatBot Floating Button */}
      <button
        onClick={() => navigate("/chat")}
        className="fixed bottom-6 right-6 bg-lime-700 hover:bg-lime-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        title="Chat with AgriBot"
      >
        💬
      </button>
    </div>
  );
}
