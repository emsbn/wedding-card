import { useState, useCallback, useRef } from 'react';
import { ImageListItem, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import Slider from 'react-slick';

import { Container, ImgList, More, Img, ModalHeader, CloseIcon } from './styles';
import { photoData } from '../../../../data/photo';

const List = () => {
  const [open, setOpen] = useState(false);
  const representative = photoData.slice(0, 4);
  const slickRef = useRef<Slider>(null);

  const onClickImage = useCallback(
    idx => {
      setOpen(true);
      setTimeout(() => {
        if (slickRef.current) slickRef.current.slickGoTo(idx, true);
      }, 100);
    },
    [slickRef],
  );

  const modalClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Container>
        <ImgList rowHeight={180} cols={2}>
          {representative.map((item, idx) => {
            if (idx !== 3) {
              return (
                <ImageListItem key={item.title} cols={item.cols || 1} onClick={() => onClickImage(idx)}>
                  <img src={item.path} alt={item.title} />
                </ImageListItem>
              );
            } else {
              return (
                <ImageListItem key={item.title} cols={item.cols || 1} onClick={() => onClickImage(idx)}>
                  <img src={item.path} alt={item.title} />
                  <More>사진 더 보기</More>
                </ImageListItem>
              );
            }
          })}
        </ImgList>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={modalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box m={1} position="relative">
            <ModalHeader onClick={modalClose}>
              <CloseIcon />
            </ModalHeader>
            <Slider className="slick-main" ref={slickRef}>
              {photoData &&
                photoData.map(photo => (
                  <div
                    className="slick-dom"
                    key={photo.title}
                    style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Img src={photo.path} alt={photo.title} key={photo.title} />
                  </div>
                ))}
            </Slider>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default List;
