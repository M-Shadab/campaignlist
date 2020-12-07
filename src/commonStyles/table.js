import styled, { css } from "styled-components"

const singleCol = css`
  width: calc(100% / 8);
`

const doubleCol = css`
  width: calc((100% / 8) * 2);
`

const tripleCol = css`
  width: calc((100% / 8) * 3);
`

export const StyledTable = styled.table`
  width: 100%;
  padding: 0;
  border-collapse: collapse;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`

export const Thead = styled.thead`
  background: #f1f1f4;
  display: block;
  width: 100%;
  padding: 1rem 1.2rem;
  tr {
    display: flex;
    th,
    td {
      font-size: 1.2rem;
      text-align: left;
      ${doubleCol};
      :nth-child(3) {
        ${singleCol};
      }
      :last-child {
        ${tripleCol};
      }
    }
    th {
      text-transform: uppercase;
    }
  }
`

export const Tbody = styled(Thead)`
  background: #fff;
  padding: 0 1.2rem;

  tr {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #f1f1f4;
    :last-child {
      border: 0;
    }
    > td:nth-child(2) {
      display: flex;
      img {
        margin-right: 1rem;
      }
    }
    > td:nth-child(3) {
      cursor: pointer;
    }
    td:last-child {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      > div:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 4px;
  }
  p {
    white-space: nowrap;
  }
`

export const CalendarWrapper = styled(ActionContainer)`
  input {
    display: none;
  }
`
