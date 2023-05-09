import Forms from "./pages/Forms";
import LandingPage from "./pages/LandingPage";
import EventCalendar from "./pages/EventCalendar";
import MyTasks from "./pages/MyTasks";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Forms />} />
      <Route path="/Calendar" element={<EventCalendar />} />
      <Route path="/MyTasks" element={<MyTasks />} />
    </Routes>
  );
}

export default App;
