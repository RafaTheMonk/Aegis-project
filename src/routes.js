import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./contexts/Favorites";
import VideoCadastre from "./pages/VideoCadastre";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import useAuth from './hooks/useAuth';

const Private = ({ Item }) => {
  const {signed} = useAuth();
  
  return signed > 0 ? <Item /> : <SignIn />;
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route exact path="/" element={<Private Item={Home} />} />
          <Route path="/library" element={<Private Item={Library} />} />
          <Route path="/watch/:id" element={<Private Item={Watch} />} />
          <Route path="/search" element={<Private Item={Search} />} />
          <Route path="/favorites" element={<Private Item={Favorites} />} />
          <Route path="/cadastre" element={<Private Item={VideoCadastre} />} />
          <Route path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
