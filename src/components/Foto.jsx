import React from "react";
import Vestido from '../img/vestido.png';
//import Estampa from '../img/estampaTest.jpg';
import { Img } from "../style/styled";


export default function Foto() {
    const el = document.getElementById('module');

    el.addEventListener('mousemove', (e) => {
    el.style.setProperty('---x', -e.offsetX + "px");
    el.style.setProperty('---y', -e.offsetY + "px");
});
    return (
        <div>
            <Img src={Vestido} alt='camiseta' class='module' id='module'/>
        </div>
    )
}
