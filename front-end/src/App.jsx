


import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import India365Home from "./pages/Home";
import TamilNaduDistrictCards from "./components/TamilNadu"; // TN districts

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<India365Home />} />

        {/* Generic fallback for all states */}
        <Route path="/state/:stateName" element={<StatePage />} />
      </Routes>
    </Router>
  );
}

// Handles all states
function StatePage() {
  const { stateName } = useParams();

  // If Tamil Nadu → show district cards
  if (stateName === "Tamil Nadu") {
    return <TamilNaduDistrictCards />;
  }

  // Fallback for other states
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
