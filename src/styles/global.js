import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        -webkit-font-smoothing: antialiased;
        background-color: ${props => {
        if(props.type === 1  ){
            return 'rgba(189, 14, 14, 0.7)';
        }
        else if(props.type === 2){
            return 'rgb(76, 145, 149)';
        }
        else{
            return 'rgb(69, 124, 163)';
        }
    }};
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

    .react-modal-content{
        width: 390px;
        background-color: #fafafa;
        padding: 2rem 1rem;
        position: relative;
        border-radius: 5px;
        outline: none;
    }
    .react-modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;