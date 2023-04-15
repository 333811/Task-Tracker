import Forms from "./pages/Forms";
import LandingPage from "./pages/LandingPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Forms />} />
    </Routes>
  );
}

export default App;
