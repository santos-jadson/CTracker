import styled from 'styled-components'

const Card = styled.div`

width: 180px;
height: 180px;

display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #eee;
border-radius: 5px;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

    +div {
        margin-left: 20px;
    }

    div {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${props => props.reference === 'infected' ? '#8D90FF' : props.reference === 'recovered' ? '#98FF9C' : '#F78D95'};

    }

    span {
        font-size: 15px;
        margin: 20px auto;
    }

    strong {
        font-size: 20px;
        margin: 20px auto; 
    }

    h3 {
        font-size: 15px;
        color: #191920;
    }

`

export default Card