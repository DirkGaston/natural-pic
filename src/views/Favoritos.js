import { useContext } from "react";

import Context from "../context";

export default function Favoritos() {
  const { fotos, favorite } = useContext(Context);

  let favorites = fotos.filter((foto) => favorite.includes(foto.id));

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favorites.map((foto, i) => (
          <div
            className="foto"
            style={{ backgroundImage: `url(${foto.src.medium})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
