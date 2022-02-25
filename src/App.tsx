import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/footer";
import Home from "./Routes/home";
import Result from "./Routes/result";
import Test from "./Routes/test";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
