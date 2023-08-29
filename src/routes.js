import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Container>
        <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
        <Footer />
        </Container>
        </BrowserRouter>
    )
}