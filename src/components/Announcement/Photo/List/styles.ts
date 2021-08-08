import styled from '@emotion/styled';
import { Box, ImageList } from '@material-ui/core';
import { ClearRounded } from '@material-ui/icons';

export const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

export const ImgList = styled(ImageList)`
  & li:nth-of-type(1) > div > img {
    transform: translateY(-40%);
  }
  & li:nth-of-type(4) > div > img {
    transform: translateY(-40%);
  }
`;

export const More = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 1, 1, 0.5);
  color: #f4f4f4;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const ModalHeader = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`;

export const CloseIcon = styled(ClearRounded)`
  color: #f4f4f4;
  padding: 0.5rem;
`;
