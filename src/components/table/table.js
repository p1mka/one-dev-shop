import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  max-width: 10rem;
  word-break: break-all;

  & select {
    font-family: rubik;
    font-size: 16px;
    min-height: 2rem;
    border: 2px solid #2f9ca3;
    border-radius: 0.5rem;
    background: none;
  }
`;

export const RowTableData = styled.td`
  display: flex;
  gap: 0.5rem;
  padding: 8px;

  position: relative;
`;
