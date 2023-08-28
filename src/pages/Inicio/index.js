import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import Titulo from "components/Titulo";

export default function Inicio() {
    return (
        <>
        <Header />
        <Banner imagem="home"/>
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <Footer />
        </>
    )
}