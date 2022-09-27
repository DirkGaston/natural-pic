import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/galeria.css";
import Heart from "./Heart";

export default function Galeria() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    axios
      .get("fotos.json")
      .then((res) => {
        console.log(res.data.photos);
        setFotos(res.data.photos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto, i) => (
        <div
          className="foto"
          style={{ backgroundImage: `url(${foto.src.medium})` }}
        >
          <Heart />
          <p className="fotoDescripcion"> {foto.alt} </p>
        </div>
      ))}
    </div>
  );
}
