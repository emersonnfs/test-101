import styled from 'styled-components'
import Estampa from '../img/estampaTest2.jpg'
import Vestido from '../img/vestido.png'
import Tesourinha from '../img/tesourinha.png'

export const Img = styled.img`
    width: 28%;
    height: 28%;
    background-image: url(${Estampa});
    background-size: 70%;
    background-repeat: repeat;
    -webkit-mask-image: url(${Vestido}) center/cover ;
    mask-image: url(${Vestido}) center/cover;
`

export const DivGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
`

export const Slider = styled.input`
    width: 25%;
    height: 10px;
    background-color: #d3d3d3;
    -webkit-appearance: none;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    &:hover {
        opacity: 1;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-image: url(${Tesourinha});
        background-size: 100%;
        cursor: pointer;
    }
    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-image: url(${Tesourinha});
        background-size: 100%;
        cursor: pointer;
    }
`