import styled from '@emotion/styled';
import { Typography, Button, Accordion, AccordionSummary } from '@material-ui/core';

export const AnnouncementMain = styled.div`
  display: block;
  position: absolute;
  bottom: 2rem;
  height: calc(100vh - 5rem);
  width: 100%;
  //background: pink;
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

export const KaKaoButton = styled(Button)`
  background: #fee500 !important;
  color: #000 !important;
  border-radius: 0.25rem !important;
  margin-bottom: 2rem !important;
  font-family: 'BMHANNAAir', 'Gamja Flower', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 600 !important;
`;

export const AccountButton = styled(Button)`
  background: mediumpurple !important;
  color: #fff !important;
  border-radius: 0.25rem !important;
  margin-bottom: 2rem !important;
  font-family: 'BMHANNAAir', 'Gamja Flower', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 600 !important;
`;

export const AccountAccordion = styled(Accordion)`
  box-shadow: none !important;
`;

export const AccountAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
`;
