import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #e3e3e3;
    width: 100%;
    height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        input{
            align-self: flex-start;
            padding: 5px;
            width: 200px;
        }
        button{
            
        }
    }
   
    .scopo{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 700px;
        height: 400px;
        box-sizing: border-box;
    }
    @media (max-width: 760px){
        .scopo{
            width: 500px;
            height: 300px;
        }
    }
    @media (max-width: 540px){
        .scopo{
            width: 340px;
            height: 190px;
        }
    }
`;