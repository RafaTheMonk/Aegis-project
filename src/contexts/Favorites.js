import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    // Verifica se existe itens repetidos
    const repeatedFavorite = favorite.some(
      (item) => item.id === newFavorite.id
    );

    // Nova lista recebe lista anterior
    let newList = [...favorite];

    // Verificar se não existe repetição e adicionar o item na lista de favoritos
    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
      // Return que só vai acontecer se entrar na instrução e for verdadeiro
    }

    // Filtro caso tente inserir novamente um item ele será removido(Processo de desfavoritar)
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);

    return setFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}
