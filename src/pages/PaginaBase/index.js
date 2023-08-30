import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritosProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";

// rota pai que irá conter os componentes que se repetirão em todas as rotas filhas. 
export default function PaginaBase() {
  return (
    <main>
        <Header />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Footer />
    </main>
  )
}
