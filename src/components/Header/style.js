import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 70px;
    background-color: rgba(255,255,255, 0.3);
    box-sizing: border-box;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    position: fixed;
    z-index: 99;
    div{
        display: flex;
        margin: 0 auto;
        padding: 0 40px;
        height: 100%;
        text-align: center;
        max-width: 800px;
        align-items: center;
        justify-content: space-between;
        p{
            display: flex;
            align-items: center;
            gap: 2px;
            img{
                width: 30px;
            }
            text-align: center;
            font-size: 1.2rem;
            height: 24px;
            cursor: pointer;
        
        }
        
        ul{
            display: flex;

            li{
                display: flex;
                gap: 5px;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                padding: 5px 8px;
                border-radius: 2px;
                cursor: pointer;
                img{
                    width: 18px;
                }
                &:hover{
                    background-color: rgba(255,255,255, 0.3);
                }
            }
        }
    }

    @media (max-width: 470px){
        div{
            padding: 0 20px;
            p{
                font-size: 16px;
            }
        }
    }
  
`;