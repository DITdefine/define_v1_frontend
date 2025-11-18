/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export const container = css`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const bottoncontainer = css`
    display: flex;
    gap: 1rem;
`
export const buttonContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 40px;
  border-radius: 25px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  padding: 3px;
  overflow: hidden;
  position: relative;
`;

export const slider = (activeTab) => css`
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 3px;
  width: calc(50% - 6px);
  background-color: #0083c9;
  border-radius: 20px;
  transform: translateX(${activeTab === "usage" ? "0" : "100%"});
  transition: transform 0.3s ease;
`;

export const button = (isActive) => css`
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  color: ${isActive ? "white" : "#555"};
  font-weight: ${isActive ? "600" : "400"};
  cursor: pointer;
  z-index: 1;
  transition: color 0.3s ease;
`;

export const chartcontainer = css`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
`