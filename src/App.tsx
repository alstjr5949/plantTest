import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/footer";
import Home from "./Routes/home";
import Result from "./Routes/result";
import Test from "./Routes/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
