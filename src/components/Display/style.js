import styled from 'styled-components';

export const Container = styled.div`
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 20px 40px;
    margin: 40px 20px;
    max-width: 600px;

    ul{
        display: flex;
        gap: 20px;
        li{
            color: white;
            font-weight: 600;
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 4px;
            &:hover{
                background-color: rgba(0, 14, 14, 0.22);
            }
        }
    }
    span{
        font-size: 4.5rem;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
    }
    button{
        padding: 10px 0;
        width: 180px;
        cursor: pointer;
        font-size: 1.5rem;
        border: none;
        border-radius: 2px;
        color: ${ props =>{
            if(props.type === 1  ){
                return 'rgba(239, 14, 14, 0.7)';
            }
            else if(props.type === 2){
                return 'rgb(76, 145, 149)';
            }
            else{
                return 'rgb(69, 124, 163)';
            }
        }
        };
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #fff;
        box-shadow: ${props => props.isActive ? 'none' : 'rgb(235 235 235) 0px 6px 0px'};
        transform: ${props => props.isActive ? 'translateY(6px)' : ''};
        &:active{
            box-shadow: none;
            transform: translateY(6px);
        }
        position: relative;
        &::before{
            content: '';
            opacity: ${props => props.isActive ? '1' : '0'};
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: ${ props =>{
                if(props.type === 1  ){
                    return '3px solid rgba(239, 14, 14, 0.7)';
                }
                else if(props.type === 2){
                    return '3px solid rgb(76, 145, 149)';
                }
                else{
                    return '3px solid rgb(69, 124, 163)';
                }
            }};
            border-top-color: ${props => props.type === 1 ? '#2EAE02' : '#e4e4e4'};
            position: absolute;
            right: 30px;
            top: 16px;
            animation: ${props => props.isActive ? 'tick 1s infinite' : 'none'};
        }
        @keyframes tick {
            from{
                transform: rotate(360deg);
            }
        }
    }

    @media (max-width: 470px) {
        box-shadow: none;
        width: 100%;
        border-radius: 0;
        padding: 20px 0;
        ul{
            gap: 5px;
            li{
                font-size: 14px;
            }
        }
    }
`;