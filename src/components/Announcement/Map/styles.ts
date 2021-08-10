import styled from '@emotion/styled';
import { Map as M, Marker as Mkr } from '@ref/react-kakao-maps';

export const Map = styled(M)`
  width: calc(100% - 2rem);
  height: 30vh;
  margin: 0.5rem 1rem;
  border-radius: 1rem;
`;

export const Marker = styled(Mkr)`
  pointer-events: none;
  z-index: 0;
`;
