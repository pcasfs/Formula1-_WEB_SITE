import Drivers from "./pages/Drivers/index";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary fallback={<div>에러발생!</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
