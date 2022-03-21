import styled from 'styled-components';

export const Container = styled.div`
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
        li{
            label{
                font-family: arial, Helvetica, sans-serif;
                font-size: 15px;
                font-weight: 600;
                color: #a4a4a4;
            }
            input{
                width: 90px;
                height: 40px;
                font-size: 18px;
                text-align: center;
            }
        }
    }
   }
`;