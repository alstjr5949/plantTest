import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Routes/home";
import Result from "./Routes/result";
import Test from "./Routes/test";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
