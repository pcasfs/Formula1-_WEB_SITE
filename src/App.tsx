import { Suspense } from "react";
// import Drivers from "./pages/Drivers/index";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeSkeleton from "./pages/Home/skeletons/HomeSkeleton";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<HomeSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Drivers /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
