//Dependencias necesarias
import {useState} from "react";
//Data
import Resenias from "./data/Resenias";

//Form
import FormResenia from "./components/FormResenia";

import "./index.css";

// import Header from "./components/Header";
// import Resenia from "./components/Resenias";
import ListR from "./components/ReseniaList";


function App(){

    //Crear estado para arreglo de resenia 
    const [lista_resenias, 
        setListaResenias ] = useState(Resenias)

    //metodó para borrar una reseña
    const delete_Resenia = (id) => {
        if(window.confirm("estas seguro de borrar esta resenia?")){
            //BORRAR RESEÑA POR ID 
            setListaResenias(lista_resenias.filter((resenia)=> resenia.id !== id ))
        }
    }


    return(
            /*<div className="container">
           <Resenia/>
        </div>*/
        <div className="contianer">
            <FormResenia />
            <ListR 
            deleteResenia={delete_Resenia}
            listaresenias={lista_resenias} />
        </div>
    )
}
export default App;