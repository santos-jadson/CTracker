import styled from 'styled-components'

const Card = styled.div`

width: 180px;
height: 180px;
background-color: #fff;

display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #eee;
border-radius: 5px;
border-bottom: 8px solid red;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

    +div {
        margin-left: 20px;
    }

    span {
        font-size: 13px;
        margin: 20px auto;
    }

    strong {
        font-size: 20px;
        margin-bottom: 20px; 
    }

`

export default Card