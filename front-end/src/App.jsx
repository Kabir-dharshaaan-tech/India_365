import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import India365Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<India365Home />} />

        {/* Placeholder for individual state pages */}
        <Route path="/state/:stateName" element={<StatePage />} />
      </Routes>
    </Router>
  );
}

// A placeholder component for state details
function StatePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="p-10 rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
        <h1 className="text-3xl font-bold">State Details Coming Soon</h1>
        <p className="mt-2 text-muted-foreground">You can add details, itineraries, images, and more here.</p>
      </div>
    </div>
  );
}
