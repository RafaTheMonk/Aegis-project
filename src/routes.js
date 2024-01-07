import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";
import VideoCadastre from "./pages/VideoCadastre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <FavoritesProvider>
        <Routes>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/cadastre" element={<VideoCadastre />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
