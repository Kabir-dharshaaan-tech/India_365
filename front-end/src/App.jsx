



// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import India365Home from "./pages/Home";
import TamilNaduDistrictCards from "./components/TamilNadu"; 
import Ariyalur from "./Districts/Tamilnadu/Ariyalur"; 
import Chengalpattu from"./Districts/Tamilnadu/Chengalpattu";
import Chennai from "./Districts/Tamilnadu/Chennai";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<India365Home />} />

        {/* Tamil Nadu → all districts */}
        <Route path="/state/Tamil Nadu" element={<TamilNaduDistrictCards />} />

        {/* Specific district routes */}
        <Route path="/district/Ariyalur" element={<Ariyalur />} />

        <Route path="/district/Chengalpattu" element={<Chengalpattu />} />
        <Route path="/district/Chennai" element={<Chennai />} />

        {/* Generic fallback for other states */}
        <Route path="/state/:stateName" element={<StatePage />} />

        {/* Generic fallback for districts */}
        <Route path="/district/:districtName" element={<DistrictPage />} />
      </Routes>
    </Router>
  );
}

// Handles all states
function StatePage() {
  const { stateName } = useParams();

  if (stateName === "Tamil Nadu") {
    return <TamilNaduDistrictCards />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="p-10 rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
        <h1 className="text-3xl font-bold">{stateName} - Details Coming Soon</h1>
        <p className="mt-2 text-gray-600">
          You can add details, itineraries, images, and more here.
        </p>
      </div>
    </div>
  );
}

// Handles districts without detailed pages yet
function DistrictPage() {
  const { districtName } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="p-10 rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
        <h1 className="text-3xl font-bold">{districtName} - Details Coming Soon</h1>
        <p className="mt-2 text-gray-600">
          Add attractions, images, and itineraries for {districtName} here.
        </p>
      </div>
    </div>
  );
}
