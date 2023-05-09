import Forms from "./pages/Forms";
import LandingPage from "./pages/LandingPage";
import Calendar from "./pages/Calendar";
import MyTasks from "./pages/MyTasks";
import TaskList from "./pages/TaskList";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Forms />} />
      <Route path="/Calender" element={<Calendar />} />
      <Route path="/MyTasks" element={<MyTasks />} />
      <Route path="/TaskList" element={<TaskList />} />
    </Routes>
  );
}

export default App;
