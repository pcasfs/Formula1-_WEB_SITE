import Drivers from "./pages/Drivers/index";
import DriverDetail from "./pages/DriverDetail";
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Ranking from "./pages/Ranking";
import RaceSchedules from "./pages/RaceSchedules";
import RaceDetail from "./pages/RaceDetail";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="drivers/:id" element={<DriverDetail />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="schedule" element={<RaceSchedules />} />
          <Route path="race/:id" element={<RaceDetail />} />
          <Route path="*" element={<div>페이지를 찾을 수 없습니다</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
