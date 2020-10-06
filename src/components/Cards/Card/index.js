import styled from 'styled-components'

const Card = styled.div`

width: 180px;
height: 180px;
background-color: #191920;

display: flex;
flex-direction: column;
border: 1px solid #fff;
border-radius: 5px;
border-bottom: 8px solid red;

    +div {
        margin-left: 20px;
    }
    

`

export default Card