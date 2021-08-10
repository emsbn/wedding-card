import styled from '@emotion/styled';
import { Box, Container as C } from '@material-ui/core';

export const Container = styled(C)`
  border-radius: 1rem;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

export const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  width: calc(100% - 2rem);
  margin: 0 1rem;
`;

export const Month = styled.strong`
  font-size: 1.375rem;
  line-height: 3rem;
`;

export const Row = styled(Box)`
  width: 100%;
`;

export const Day = styled.strong`
  font-size: 0.875rem;
  line-height: 2.75rem;
  width: 14%;
  display: inline-block;
`;

export const Sat = styled.strong`
  font-size: 0.875rem;
  line-height: 2.75rem;
  width: 14%;
  display: inline-block;
  color: #4c73dd;
`;

export const Sun = styled.strong`
  font-size: 0.875rem;
  line-height: 2.75rem;
  width: 14%;
  display: inline-block;
  color: #ff7179;
`;

export const WeddingDay = styled.strong`
  font-size: 0.875rem;
  line-height: 2.75rem;
  width: 14%;
  display: inline-block;
  color: #fff;
  background-color: pink;
  border-radius: 1rem;
`;
