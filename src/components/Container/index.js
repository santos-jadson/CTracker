import styled from 'styled-components'

const Container = styled.div`
max-width: 900px;
background: #f9f9f9;
border: 2px solid #eee;
border-radius: 4px;
margin: 50px auto;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    
        h1 {
        font-size: 50px;
        color: #000;
        }

        img {
            width: 40px;
            color: #eee;
            margin-right: 10px;
        }

        div {
            display: flex;
        }

    }
`
export default Container;