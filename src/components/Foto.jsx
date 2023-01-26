import React from "react";
import Vestido from '../img/vestido.png';
//import Estampa from '../img/estampaTest.jpg';
import { Img, DivGeral, DivSlider } from "../style/styled";
//import RangeSlider from 'react-range-slider-input';



export default function Foto() {

    document.addEventListener('dragover', (event) =>{
          
        const objeto = document.getElementById('module');
        // Grab the mouse's X-position.
        const mousex = -event.offsetX;
        // Grab the mouse's Y-position.
        const mousey = -event.offsetY;

        objeto.style.backgroundPosition = mousex + 'px ' + mousey + 'px';
    });

    return (
        <DivGeral>
            <div>
                <Img src={Vestido} alt='camiseta' class='module' id='module'/>
            </div>
            <DivSlider class='sliderContainer'>
                <input type='range' min='7' max ='100' valeu='47' step='1' id='myRange' class='slider' />
            </DivSlider>
        </DivGeral>
    )
}