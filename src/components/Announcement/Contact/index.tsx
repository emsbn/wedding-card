import React, { useCallback, useState } from 'react';
import { Backdrop, Fade } from '@material-ui/core';

import {
  ProfileContainer,
  ProfileImg,
  ProfileName,
  Modal,
  ModalContainer,
  ModalBg,
  ModalProfile,
  ModalContact,
  ModalProfileName,
  ModalContactLink,
} from './style';
import allProfile, { bongsug, chaeeun, dagyeom, hyeonsu, sihong, subin } from '../../../data/profile';

const Contact = ({
  img,
  name,
  mx = 0,
  click,
}: {
  img: string;
  name: string;
  mx?: number;
  click: 'subin' | 'hyeonsu' | 'bongsug' | 'chaeeun' | 'sihong' | 'dagyeom';
}) => {
  const [open, setOpen] = useState(false);
  const [who, setWho] = useState<string>('');

  const onClickProfile = useCallback(name => {
    console.log({ name });
    setWho(allProfile[name]);
    setOpen(true);
  }, []);

  const contactModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <ProfileContainer mx={mx} onClick={() => onClickProfile(click)}>
        <ProfileImg src={img} alt={name} />
        <ProfileName>{name}</ProfileName>
      </ProfileContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={contactModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <ModalContainer>
            <ModalBg>
              <ModalProfile>
                <ProfileImg src={img} alt={name} />
                <ModalProfileName>{name}</ModalProfileName>
              </ModalProfile>
              <ModalContact>
                <span>전화번호</span>
                <span>{who['tel']}</span>
                <ModalContactLink href={`tel:${who['tel']}`}>
                  <span>전화하기</span>
                </ModalContactLink>
              </ModalContact>
            </ModalBg>
          </ModalContainer>
        </Fade>
      </Modal>
    </>
  );
};

export default Contact;
