//Dependencias necesarias
import {useState} from "react";
//Data
import Resenias from "./data/Resenias";

import "./index.css";

import Header from "./components/Header";
import Resenia from "./components/Resenias";
import ListR from "./components/ReseniaList";


function App(){

    //Crear estado para arreglo de resenia 
    const [lista_resenias, 
        setListaResenias ] = useState(Resenias)

    //metodó para borrar una reseña
    const delete_Resenia = (id) => {
        window.confirm("estas seguro de borrar esta resenia?")
    }


    return(
            /*<div className="container">
           <Resenia/>
        </div>*/
        <div className="contianer">
            <ListR 
            deleteResenia={delete_Resenia}
            listaresenias={lista_resenias} />
        </div>
    )
}
export default App;