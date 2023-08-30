import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

export default function Inicio() {
    const [videos, setVideos] = useState([]);

    // após a renderização inicial, faz o fetch da API de filmes e atualiza o estado do videos. 
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/dinozindev/cinetag-api/videos")
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])


    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map(filme => {
                    return <Card {...filme} key={filme.id} />
                })}
            </section>
        </>
    )
}