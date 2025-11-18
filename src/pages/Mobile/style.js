/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  padding: 16px;
`;

export const today_car = css`
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const title = css`
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 600;
  color: #222;
  text-align: center;
`;

export const row = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
  padding: 0 10px;
`;

export const today_car_text = css`
  font-size: 18px;
  font-weight: 500;
  color: #4d4e6b;
  margin: 0;
`;

export const today_car_text2 = css`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const map = css`
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;
