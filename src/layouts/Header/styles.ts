import styled from '@emotion/styled';
import { Button as BT } from '@material-ui/core';

export const Header = styled.header`
  max-width: 600px;
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
`;

export const Button = styled(BT)`
  border-radius: 3rem !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
`;
