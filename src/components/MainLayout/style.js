/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const mainlayout = css`
    height: 100%;
    width: 100%;
    display: flex;
`

export const sidebar = css`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color: #F5F5F5;
  box-shadow: 2px 0 8px rgba(0,0,0,0.15);
  z-index: 10;

`

export const maincontnet = css`
    box-sizing: border-box;
    height: 100%;
    width: 1670px;
    overflow: hidden;
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
    color: #212121;
    font-size: 20px;
    font-weight: 800;
`
export const buttons = css`
    display: flex;
    flex-direction: column;

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
  background-color: ${active ? '#0083c9' : 'transparent'};
  gap: 5px;
  &:hover {
    background-color: ${active ? '#006fa8' : '#e6f2fb'};
  }
  &:active {
    background-color: ${active ? '#005b87' : '#cce6f7'}; /* 클릭 눌렀을 때 */
  }

  p {
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    color: ${active ? '#f5f5f5' : '#0c0c0c'};
  }
`;