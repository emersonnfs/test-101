import styled from 'styled-components'
import Estampa from '../img/estampaTest2.jpg'
import Vestido from '../img/vestido.png'

export const Img = styled.img`
    --size : 46%;
    width: 50%;
    height: 50%;
    background-image: url(${Estampa});
    background-size: var(--size);
    background-repeat: repeat;
    -webkit-mask-image: url(${Vestido}) center/cover ;
    mask-image: url(${Vestido}) center/cover;
`

export const DivGeral = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;
    background-color: #f5f5f5;
`

export const DivSlider = styled.div`
    .slider {
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        width: 200px;
        height: 25px; /* Specified height */
        background: #d3d3d3; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;
    }

    /* Mouse-over effects */
    .slider:hover {
        opacity: 1; /* Fully shown on mouse-over */
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #04AA6D; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }

    .slider::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #04AA6D; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }
`

