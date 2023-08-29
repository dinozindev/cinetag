import { createContext, useContext, useState } from "react";

// cria um contexto
export const FavoritosContext = createContext();
// altera o nome do contexto para Favoritos
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    // define o estado inicial de favorito
    const [favorito, setFavorito] = useState([]);
    // retorna o Provedor, que será responsável por fornecer os dados compartilhados (contexto) dentro de value, em que, caso seu valor mude, todos os componentes que estão recebendo esses dados serão re-renderizados. 
    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

// hook personalizado useFavoritoContext para adicionar filmes para a lista de favoritos. 
export function useFavoritoContext() {
    // o hook useContext foi usado para acessar os dados compartilhados do contexto FavoritosContext. 
    const { favorito, setFavorito } = useContext(FavoritosContext);

    // function que recebe um filme novo que foi favoritado/desfavoritado, adicionando-o na lista. 
    function adicionarFavorito(novoFavorito) {
        // verifica se o novoFavorito já está contido dentro da lista de favoritos a partir do id. Caso esteja, retorna true, caso contrário, retorna false. 
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
        // cria uma nova lista, copiando os objetos contidos no state favorito. 
        let novaLista = [...favorito];
        // caso favoritoRepetido retorne false, adiciona o novoFavorito dentro da novaLista, e atualiza o state com a novaLista.
        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista)
            // caso favoritoRepetido retorne true, cria uma novaLista contendo apenas os filmes favoritos que tenham id diferente do id de novoFavorito, ou seja, os que não foram desfavoritados. 
        } else {
            novaLista = favorito.filter(fav => fav.id !== novoFavorito.id);
            return setFavorito(novaLista);
        }
    }
    // o hook, por fim, retorna o state favorito e a function adicionarFavorito. 
    return {
        favorito,
        adicionarFavorito
    }
}