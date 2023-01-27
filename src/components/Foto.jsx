import React from "react";
import Vestido from '../img/vestido.png';
//import Estampa from '../img/estampaTest.jpg';
import { Img, DivGeral, Slider } from "../style/styled";



export default function Foto() {

    document.addEventListener('dragover', (event) =>{
          
        const objeto = document.getElementById('module');
        // Grab the mouse's X-position.
        const mousex = -event.offsetX;
        // Grab the mouse's Y-position.
        const mousey = -event.offsetY;

        objeto.style.backgroundPosition = mousex + 'px ' + mousey + 'px';
    });

    const zoom = () => {
        const objeto = document.getElementById('module');
        const slider = document.getElementById('myRange');
        objeto.style.backgroundSize = slider.value + '%';
    }

    return (
        <DivGeral>
            <Img src={Vestido} alt='camiseta' id='module'/>
            <Slider type="range" min="20" max="120" id="myRange" onInput={zoom} />    
        </DivGeral>
    )
}