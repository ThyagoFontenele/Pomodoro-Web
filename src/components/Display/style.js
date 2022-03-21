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
    gap: 40px 20px;
    padding: 20px;
    margin: 0px 20px;
    max-width: 500px;

    ul{
        display: flex;
        gap: 20px;
        li{
            color: white;
            font-weight: 600;
            font-size: 15px;
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
        font-size: 4rem;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
    }
    button{
        padding: 10px 0;
        width: 180px;
        cursor: pointer;
        font-size: 1.3rem;
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
            border-top-color: #fff;
            position: absolute;
            right: 30px;
            top: 15px;
            animation: tick 1.4s linear infinite;
        }
        @keyframes tick {
            from{
                transform: rotate(360deg);
            }
        }
    }

    @media (max-width: 430px) {
    }
`;