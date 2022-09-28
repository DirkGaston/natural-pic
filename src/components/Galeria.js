import "../assets/css/galeria.css";

import { useState, useContext } from "react";

import Context from "../context";
import Heart from "./Heart";

export default function Galeria() {
  const { fotos, favorite, setFavorite } = useContext(Context);

  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorite = (id) => {
    if (!favorite.includes(id)) {
      setFavorite(favorite.concat(id));
      setIsFavorite((current) => !current);
      console.log(id);
    } else {
      removeFavorite(id);
    }
  };

  const removeFavorite = (id) => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto, i) => (
        <div
          className="foto"
          style={{ backgroundImage: `url(${foto.src.medium})` }}
          onClick={() => addToFavorite(foto.id)}
        >
          <Heart filled={favorite.includes(foto.id) ? true : undefined} />
          <p className="fotoDescripcion"> {foto.alt} </p>
        </div>
      ))}
    </div>
  );
}
