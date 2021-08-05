import { useEffect } from 'react';
import { Marker } from '@ref/react-kakao-maps';

import { Map } from './styles';

const { kakao } = window;

const MapComponent = () => {
  return (
    <>
      <Map options={{ center: new kakao.maps.LatLng(37.546503878215, 127.08027558138629), level: 5 }}>
        <Marker
          options={{
            position: new kakao.maps.LatLng(37.5465038782151, 127.08027558138629),
          }}
        />
      </Map>
    </>
  );
};

export default MapComponent;
