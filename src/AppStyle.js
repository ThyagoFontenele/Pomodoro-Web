import styled from 'styled-components';

export const AppContainer = styled.div`
    background-color: ${props => {
        if(props.type === 1  ){
            return 'rgba(239, 14, 14, 0.7)';
        }
        else if(props.type === 2){
            return 'rgb(76, 145, 149)';
        }
        else{
            return 'rgb(69, 124, 163)';
        }
    }};
    height: 100vh;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;