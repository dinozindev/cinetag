import { useFavoritoContext } from "contexts/Favoritos"
import styles from "./Card.module.css"
import iconeFavoritar from "./favoritar.png"
import iconeDesfavoritar from "./desfavoritar.png";

export default function Card({id, titulo, capa}) {
  const {favorito, adicionarFavorito} = useFavoritoContext();
  // verifica se o id recebido pelo card já está na lista de favoritos. Caso esteja, retorna true, caso contrário, retorna false. 
  const ehFavorito = favorito.some(fav => fav.id === id);
  // caso ehFavorito seja falso, retorna o iconeFavoritar. Caso contrário, retorna o iconeDesfavoritar. 
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa}/>
        <h2>{titulo}</h2>
        <img 
        src={icone} 
        alt="Favoritar filme" 
        className={styles.favoritar} 
        onClick={() => {
          adicionarFavorito({id, titulo, capa})
        }}/>
    </div>
  )
}
