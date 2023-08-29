import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritosProvider from "contexts/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}