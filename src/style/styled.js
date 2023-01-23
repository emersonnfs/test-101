import styled from 'styled-components'
import Estampa from '../img/estampaTest2.jpg'
import Vestido from '../img/vestido.png'

export const Img = styled.img`
    width: 50%;
    height: 50%;
    background-image: url(${Estampa});
    ---x: 0px;
    ---y: 0px;
    background-position: var(---x) var(---y);
    background-size: 7%;
    background-repeat: repeat;
    -webkit-mask-image: url(${Vestido}) center/cover ;
    mask-image: url(${Vestido}) center/cover;
`