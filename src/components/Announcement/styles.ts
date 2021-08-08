import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';

export const AnnouncementMain = styled.div`
  display: block;
  position: absolute;
  bottom: 2rem;
  height: calc(100vh - 5rem);
  width: 100%;
  background: pink;
`;

export const SubTitle = styled(Typography)`
  color: #49b293;
  font-size: 1.5rem !important;
  font-family: 'BMHANNAAir', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 700 !important;
`;

export const TextRow = styled(Typography)`
  font-family: 'BMHANNAAir', 'Gamja Flower', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.75rem !important;
`;

export const Name = styled(Typography)`
  font-size: 1.125rem !important;
  font-family: 'BMHANNAAir', 'Gamja Flower', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.75rem !important;
  font-weight: 600 !important;
`;
