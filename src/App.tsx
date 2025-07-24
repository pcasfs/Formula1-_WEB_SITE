import { Suspense } from "react";
import Drivers from "./pages/Drivers/index";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Drivers /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
