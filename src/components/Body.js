import React from "react";
import Cadeado from '../svg/cadeado.svg'
import Cartao from '../svg/cartao.svg'
import Caminhao from '../svg/caminhao.svg'
import Livros from '../images/category-1.jpeg'
import Escritorio from '../images/category-2.jpeg'
import Vestuario from '../images/category-3.jpeg'

function Body() {

    return (
        <body>
            <img className="img1" src={Cadeado} />
            <img className="img2" src={Cartao} />
            <img className="img3" src={Caminhao} />
            <div className="grid">
                <img className="imgL" src={Livros} ></img> <p>Livros</p>
                <img className="imgE" src={Escritorio} ></img> <p>Escritorio</p>
                <img className="imgV" src={Vestuario} ></img> <p>Vestuario</p>
            </div>
        </body>
        
    )
}

export default Body