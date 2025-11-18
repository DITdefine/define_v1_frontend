/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export const table_container = css`
    margin-top: 2rem;      /* rem 단위로 변경 */
    overflow-y: auto;
    border-top: 1px solid #ddd;
`;

export const parking_table = css`
  width: 100%;             /* 부모 폭에 맞춤 */
  border-collapse: collapse; 
  table-layout: fixed;     /* 열 너비 균등 */
  th, td {
    white-space: nowrap;
    padding: 1rem;        /* 고정 px 대신 rem */
    text-align: center;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;    /* 폰트도 상대적으로 */
    border-bottom: 1px solid #dbdbdb;
  }

  thead, th {
    position: sticky;
    top: 0;
    background: #F5F5F5;
    z-index: 1;
  }

  /* 작은 화면 대응 */
  @media (max-width: 768px) {
    th, td {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    th, td {
      padding: 0.3rem;
      font-size: 0.7rem;
    }
  }
`;