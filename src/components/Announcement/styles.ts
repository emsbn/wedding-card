import styled from '@emotion/styled';
import { Typography, Button, Accordion, AccordionSummary } from '@material-ui/core';

export const AnnouncementMain = styled.div`
  display: block;
  position: absolute;
  bottom: 2rem;
  width: 100%;
`;

export const Eaves = styled.img`
  width: 50%;
`;

export const SubTitle = styled(Typography)`
  color: #49b293;
  font-size: 1.75rem !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
`;

export const TextRow = styled(Typography)`
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.75rem !important;
  font-size: 1rem !important;
`;

export const Name = styled(Typography)`
  font-size: 1.125rem !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.75rem !important;
  font-weight: 600 !important;
`;

export const Daughter = styled.span`
  width: 2rem;
  display: inline-block;
`;

export const KakaomapText = styled(Typography)`
  font-size: 0.875rem !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.5rem !important;
  color: lightgrey !important;
  text-decoration: underline;
`;

export const Place = styled(Typography)`
  font-size: 1.125rem !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.75rem !important;
  color: indianred !important;
`;

export const KaKaoButton = styled(Button)`
  background: #fee500 !important;
  color: #000 !important;
  border-radius: 0.25rem !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 400 !important;
  font-size: 0.9rem !important;
`;

export const AccountButton = styled(Button)`
  background: #ec907c !important;
  color: #fff !important;
  border-radius: 0.25rem !important;
  font-family: 'Cafe24Oneprettynight', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 400 !important;
  font-size: 0.9rem !important;
`;

export const AccountAccordion = styled(Accordion)`
  box-shadow: none !important;
`;

export const AccountAccordionSummary = styled(AccordionSummary)`
  min-height: 40px !important;

  .MuiAccordionSummary-content {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 2.5rem;
    margin: 0 !important;
  }
`;
