import styled from "styled-components"

export const ModalWrapper = styled.div`
  width: calc(100vw - 12rem);
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.15);
`

export const Modal = styled.div`
  background: #fff;
  width: 40rem;
  height: 40rem;
  padding: 2rem 2.4rem;
  img {
    width: 12rem;
    margin-bottom: 3rem;
  }
`

export const PlanWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
