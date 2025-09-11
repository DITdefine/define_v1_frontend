/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const mainlayout = css`
    height: 100%;
    width: 100%;
    display: flex;
`

export const sidebar = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 2px 0 8px rgba(0,0,0,0.15);
  z-index: 10;

`

export const maincontnet = css`
    flex: 1;
    background-color: #F3F4F6;
`
export const parkinglog = css`
    border-top: 3px solid #F3F4F6;
    border-bottom: 3px solid #F3F4F6;
    text-align: center;
    padding: 23px 0px;
`

export const parkinglog_text = css`
    color: #0083C9;
    font-size: 40px;
    font-weight: 600;
`

export const parkinglog_text2 = css`
    color: #C4C6CC;
    font-size: 16px;
    font-weight: 600;
`
export const buttons = css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    min-height: 0;
    button{
        padding: 0px;
    }
    
`
export const button_icon = (active) => css`
  display: flex;
  padding: 20px 42px;
  align-items: center;
  gap: 5px;
  background-color: ${active ? '#0083c9' : 'transparent'};

  &:hover {
    background-color: ${active ? '' : '#e6f2fb'}; /* active면 조금 더 진한 색으로 hover */
  }

  p {
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    color: ${active ? '#fff' : '#000'};
  }
`;