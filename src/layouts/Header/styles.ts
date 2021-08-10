import styled from '@emotion/styled';
import { Button as BT } from '@material-ui/core';

export const Header = styled.header`
  max-width: 600px;
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  backdrop-filter: blur(3px);
`;

export const Button = styled(BT)`
  border-radius: 3rem !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
`;
