import Banner from "components/Banner"
import styles from "./Player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";


export default function Player() {
    const [video, setVideo] = useState();
    // recebe o valor do parâmetro definido na rota Player.
    const parametros = useParams();
    // após a renderização inicial, faz o fetch da API, buscando apenas o vídeo que possui o mesmo id que parâmetro da URL, retornando o valor no estado do video.
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/dinozindev/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [parametros])

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
