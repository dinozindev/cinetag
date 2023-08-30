import Banner from "components/Banner"
import styles from "./Player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom";
import videos from "json/db.json"
import NotFound from "pages/NotFound";
export default function Player() {
    // recebe o valor do parâmetro definido na rota Player.
    const parametro = useParams();
    // itera sobre o array de videos, retornando apenas o video que tenha o mesmo id que o parâmetro da URL. 
    const video = videos.find(video => {
        return video.id === Number(parametro.id)
    })

    // caso não haja vídeo com o mesmo id que o parâmetro, retorna a página NotFound. 
    if(!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.section}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}
