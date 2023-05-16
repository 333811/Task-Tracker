import Forms from "./pages/Forms";
import LandingPage from "./pages/LandingPage";
import EventCalendar from "./pages/EventCalendar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/LoginSignup" element={<Forms />} />
      <Route path="/Calendar" element={<EventCalendar />} />
    </Routes>
  );
}

export default App;
