import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css"
import Card from "components/Card";


export default function Favoritos() {
  return (
    <>
    <Banner imagem="favoritos" />
    <Titulo>
        <h1>Meus Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        <Card id="2" titulo="Gato gordo" capa="https://media.tenor.com/2XqdnsXiGJUAAAAC/garfield.gif" />
    </section>
    </>
  )
}