import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repositories from "./components/Repositories";
import Home from "./components/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Repositories />} path="/repositories" exact />
        <Route element={<Home />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
