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
        div{
            padding: 2px 0px 0px 0px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 10px;

            input{
                padding: 5px 2px;
                max-width: 220px;
                font-size: 14px;
            }
            button{
                padding: 8px 6px;
                color: white;
                border: none;
                background-color: rgba(6, 217, 73, 0.8);
                cursor: pointer;
                border-radius: 2px;
                & + button{
                    background-color: rgba(230, 64, 64, 1);
                }
            }

            button + span{
                color: blue;
                width: 200px;
                line-height: 34px;
            }
        }
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