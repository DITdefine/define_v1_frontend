/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const maincontainer = css`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: 1rem 1rem; /* px → rem */
    margin: 0 auto;     /* 가운데 정렬 */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const date_text = css`
    display: flex;
    justify-content: space-between;
    p{
        margin-right: 10px;
        font-size: 25px;
        font-weight: 700;
    }
`
export const livebox = css`
    box-sizing: border-box;
    width: 45%;
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    border-radius: 2rem;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
    padding: 15px 10px;
`;


export const today_car = css`
    box-sizing: border-box;
    width: 15%;
    background-color: #F5F5F5;
    padding: 20px;
    border-radius: 35px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const today_car_text = css`
    font-size: 24px;
    font-weight: 500;
    white-space: nowrap;
    color: #4D4E6B;
`

export const today_car_text2 = css`
    font-size: 32px;
    font-weight: 500;
    white-space: nowrap;
`

export const search_box = css`
    box-sizing: border-box;
    width: 25%;
    border-radius: 35px;
    background-color: #F5F5F5;
    padding: 20px;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
`

export const inputbox = css`
    box-sizing: border-box;
    height: 100%;
    width: 450px;
    display: flex;
    border-radius: 8px;
    border: 2px solid #2fafff;
    border-right: none;
    input{
        box-sizing: border-box;
        width: 100%;
        flex: 1;
        padding: 10px;
        border: none;
        font-size: 16px;
        border-radius: 20px;
        background-color: #F5F5F5;
        &:focus {
            outline: none;
            box-shadow: none;
        }
        &:focus-visible {
            outline: none;
            outline-offset: 2px;
        }
    }

    button{
        box-sizing: border-box;
        justify-content: flex-end;
        white-space: nowrap;
        padding: 10px 20px;
        font-size: 16px;
        color: #FFF;
        border-radius: 8px;
        background-color: #0083c9;
        &:hover {
        background-color: #006fa8;
        }

        /* active: 더 진한 회색 */
        &:active {
        background-color: #005b87;
        }
    }
`

export const log_box = css`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: #F5F5F5;
    border-radius: 35px;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
        text-align: left;
        margin-left: 20px;
    }
`


export const box = css`
    box-sizing: border-box;
    height: 100%;
    width: 53%;
    border-radius: 35px;
    background-color: #F5F5F5;
    padding: 20px 10px;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
        margin-left: 20px;
        margin-top: 0px;
    }
`