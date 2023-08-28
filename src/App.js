import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
import Test from "./components/Pages/Test/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
