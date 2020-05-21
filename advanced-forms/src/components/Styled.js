import React from 'react'
import styled from 'styled-components'

export const StyledHr = styled.hr`
border-top: 2px solid gainsboro;

`

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    margin: 4% 20%;

    h1{
        text-align: center;
        width: 100%;
    }

`

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% 0;
    width: 100%;

    button {
        margin: 3% 30%;
        width: 40%;
        color: lime;
        border: 2px solid lime;
        border-radius: 10px;

        &:hover{
            cursor: pointer;
        }

        &:disabled{
            color: indianred;
            border: 2px solid indianred;

            &:hover{
                cursor:not-allowed;
            }
        }
    }

    .error{
        color: indianred;
    }

`;

export const FieldDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    justify-items: center;
    margin: 1% 0;

    input{
        width: 60%;
    }
`


export const FlexCenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardDiv = styled.div`
    border: 1px solid gainsboro;
    border-radius: 10px;
    width: 60%;
    padding: 0 3%;
    margin: 4%;
    box-shadow: 0px 2px 6px -2px rgb(88, 87, 87);
`
export const TosDiv = styled.div`
    text-align: center;
    line-height: 1.8;
    width: 90%;
    margin: 0 5%;
`
