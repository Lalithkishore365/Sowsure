import { useEffect, useState } from "react";

export default function FarmDashboard({ user }) {
  const [weather, setWeather] = useState({ temp: 68, status: "Partly Cloudy" });
  const [alerts] = useState(2);

  return (
    <div className="pt-20 px-4 sm:px-10 bg-gradient-to-b from-stone-100 via-stone-50 to-lime-100 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-lime-700">🌾 My Farm Dashboard</h1>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="Crop Health" value="92%" icon="🌿" subtitle="+2.5% from last week" accent="text-green-600" />
        <Card title="Soil Moisture" value="64%" icon="💧" subtitle="Optimal level" accent="text-blue-500" />
        <Card title="Temperature" value="76°F" icon="🌡" subtitle="+5°F from yesterday" accent="text-yellow-600" />
        <Card title="Alerts" value={alerts} icon="⚠️" subtitle="Requires attention" accent="text-orange-600" />
      </div>

      {/* Grid for Planning, Market, Weather */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow col-span-1 md:col-span-1">
          <h2 className="text-lg font-semibold text-lime-700 mb-2">📋 Crop Planning</h2>
          <div className="text-sm text-gray-700">
            <p><strong>Current Season:</strong> Kharif 2025</p>
            <div className="mt-4">
              <p><strong>Tomato</strong> – Sowing (Apr 15)</p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-400 h-full w-1/4"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">25% complete</p>

              <p className="mt-4"><strong>Chickpea</strong> – Preparation (May 5)</p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-1/6"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">16% complete</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow col-span-1">
          <h2 className="text-lg font-semibold text-lime-700 mb-2">📈 Market Prices</h2>
          <p className="text-sm text-gray-500 mb-2">Updated: Today, 10:45 AM</p>
          <div className="text-sm text-gray-800 space-y-2">
            <div className="flex justify-between">
              <span>Tomato</span>
              <span>₹14.50 <span className="text-green-600 text-xs">▲ 0.75</span></span>
            </div>
            <div className="flex justify-between">
              <span>Chickpea</span>
              <span>₹58.20 <span className="text-green-600 text-xs">▲ 1.10</span></span>
            </div>
            <div className="flex justify-between">
              <span>Paddy</span>
              <span>₹21.00 <span className="text-red-600 text-xs">▼ 0.40</span></span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow col-span-1">
          <h2 className="text-lg font-semibold text-lime-700 mb-2">🌤 Weather & Tips</h2>
          <div className="text-sm text-gray-800">
            <div className="flex justify-between mb-2">
              <span className="text-2xl">☁️</span>
              <div>
                <p className="text-xl">{weather.temp}°F</p>
                <p className="text-xs text-gray-600">{weather.status}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 text-center text-xs text-gray-600 mt-4">
              <div>
                ☀️<br />72°F<br /><span>Tue</span>
              </div>
              <div>
                🌧<br />65°F<br /><span>Wed</span>
              </div>
              <div>
                ☁️<br />70°F<br /><span>Thu</span>
              </div>
              <div>
                🌬<br />69°F<br /><span>Fri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, subtitle, icon, accent }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
      <div className="text-sm text-gray-500 flex justify-between">
        <span>{title}</span>
        <span className="text-lg">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-lime-700">{value}</div>
      <div className={`text-xs ${accent}`}>{subtitle}</div>
    </div>
  );
}
