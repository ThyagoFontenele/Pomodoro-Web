import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1{
        font-size: 16px;
        color: #a4a4a4;
        font-family: Arial, Helvetica, sans-serif;
        padding-bottom: 15px;
        border-bottom: 1px solid #a4a4a4;
    }
   div{

    h2{
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 0px;
    }
    ul{
        display: flex;
        gap: 10px;
        li{
            label{
                font-family: Arial, Helvetica, sans-serif;
                font-size: 15px;
                font-weight: 600;
                color: #a4a4a4;
            }
            input{
                width: 85px;
                padding: 10px 0px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 18px;
                text-align: center;
            }
        }
    }
   }
   span{
       color: red; 
       font-family: Arial, Helvetica, sans-serif;
    }
   @media (max-width: 470px) {
       div{
            ul{
                li{
                    label{
                        font-size: 14px;
                    }
                    input{
                        width: 85px;
                        font-size: 16px;
                    }
                }
            }
       }
    }
`;