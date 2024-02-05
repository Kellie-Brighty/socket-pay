import Deposit from "./pages/Deposit";
import Withdrawal from "./pages/Withdraw";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdrawal />} />
      </Routes>
    </Router>
  );
}
