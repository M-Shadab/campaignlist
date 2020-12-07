import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  color: #1f2640;
  letter-spacing: 0.2px;
`;

export const Font16 = styled.p`
  font-size: 1.6rem;
  color: ${({ color }) => (color ? color : "#1f2640")};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-bottom: ${({ borderBottom }) => borderBottom && "3px solid #1f2640"};
`;

export const Font14 = styled.p`
  font-size: 1.4rem;
  color: ${({ color }) => (color ? color : "#7788A3")};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
