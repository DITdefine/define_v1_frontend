/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const maincontainer = css`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px 40px;
`

export const title1 = css`
    font-size: 35px;
    font-weight: 700;
`

export const smalltitle = css`
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 20px;
    font-weight: 600;
`

export const searchbox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    padding: 20px;;
    height: 370px;
    width: 100%;
    background-color: #F5F5F5;
    border-radius: 35px;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
`

export const selection = css`
    text-align: center;

    font-size: 20px;
    font-weight: 800;

    select{
        margin-top: 10px;
        width: 150px;
        padding: 8px 12px;
        font-size: 16px;
        font-weight: 500;
        color: #222;
        border-radius: 8px;
        background-color: white;
        appearance: none; /* 기본 화살표 제거 (크롬, 사파리) */
        -moz-appearance: none; /* 파이어폭스 */
        -webkit-appearance: none; /* 사파리 */
        background-image: url('data:image/svg+xml;utf8,<svg fill="%23007bff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 20px;
        cursor: pointer;
    }

    select:focus{
        outline: none;
        border-color: #0056b3;
        box-shadow: 0 0 2px rgba(0, 123, 255, 0.5);
    }

    option{
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    }
`

export const inputbox = css`
    text-align: center;

    font-size: 20px;
    font-weight: 800;

    input {
        margin-top: 10px;
        width: 150px;
        padding: 6px 7px;
        font-size: 16px;
        font-weight: 500;
        border-radius: 8px;
        background-color: #fff;
        color: #333;
        outline: none;
        border: 1px solid;
        /* 브라우저 기본 스타일 제거 */
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        /* 달력 아이콘 위치 조정 */
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 20px;
    }

    input:focus {
        border-color: #0056b3;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

`
export const searchbutton = css`
    margin-top: 37px;
    height: 50%;
    box-sizing: border-box;
    justify-content: flex-end;
    white-space: nowrap;
    text-align: center;
    padding: 0px 30px;
    font-size: 16px;
    font-weight: 600;
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
`

export const contentbox = css`
    box-sizing: border-box;
    display: flex;
    margin-top: 25px;
    height: 60%;
    width: 100%;
    justify-content: space-around;
    gap: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #222;
    p{
        color: #444;
    }
`

export const moneycontent = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    width: 43%;
    border-radius: 35px;
    background-color: #f0f9f1;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.15);
    h1{
        color: #2e7d31;
    }
`

export const carcontent = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    height: 100%;
    width: 43%;
    border-radius: 35px;
    background-color: #e3f2fd;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.15);
    h1{
        color: #1976d2;
    }
`

export const listbox = css`
    box-sizing: border-box;
    height: 100%;
    width: 45%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    border-radius: 35px;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
`
export const box = css`
    box-sizing: border-box;
    height: 100%;
    width: 53%;
    border-radius: 35px;
    background-color: #F5F5F5;
    padding: 20px;
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
        margin-left: 20px;
        margin-top: 0px;
    }
`