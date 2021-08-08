import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

export const ProfileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;

export const ProfileName = styled.p`
  margin-top: 1rem;
  font-size: 0.75rem;
`;
