import styled from '@emotion/styled';
import { Box, Button } from '@material-ui/core';

export const AccountContainer = styled(Box)`
  width: 90%;
  height: 2rem;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

export const AccountTextarea = styled.textarea`
  opacity: 0;
  z-index: -999;
  position: absolute;
  top: 0;
`;

export const CopyButton = styled(Button)`
  background: lightgrey !important;
  color: #fff !important;
  height: 1.5rem;
  border-radius: 0.25rem !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 400 !important;
  font-size: 0.75rem !important;
`;
