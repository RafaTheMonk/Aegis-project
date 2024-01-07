import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/watch/:id" element={<Watch />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
