import styled from '@emotion/styled';
import { Box, Modal as Md } from '@material-ui/core';

export const ProfileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

export const Modal = styled(Md)`
  display: flex;
  align-items: center;
`;

export const ModalContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBg = styled(Box)`
  width: 80%;
  height: 10rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

export const ModalProfile = styled(Box)`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalProfileName = styled.p`
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
`;

export const ModalContact = styled(Box)`
  width: 90%;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 0.9rem;
`;

export const ModalContactLink = styled.a`
  color: #000;
`;
