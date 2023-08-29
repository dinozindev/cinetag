import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css"
import Card from "components/Card";
import { useFavoritoContext } from "contexts/Favoritos";


export default function Favoritos() {
    // recebe o state favorito através do hook personalizado useFavoritoContext.
    const {favorito} = useFavoritoContext();
  return (
    <>
    <Banner imagem="favoritos" />
    <Titulo>
        <h1>Meus Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        {/* faz um map para a lista de favoritos, retornando um componente de Card para cada um, passando as props pelo spread operator e atribuindo uma key para cada um */}
        {favorito.map(fav => {
            return <Card {...fav} key={fav.id} />
        })}
    </section>
    </>
  )
}
