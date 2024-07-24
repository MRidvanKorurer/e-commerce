import "./App.css";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
