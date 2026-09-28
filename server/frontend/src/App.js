import LoginPanel from "./components/Login/Login"
import RegisterUI from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterUI />} />

    </Routes>
  );
}
export default App;
