import React, { useCallback, useRef, useState } from 'react';
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
  AccountTextarea,
} from './style';
import allProfile, { bongsug, chaeeun, dagyeom, hyeonsu, sihong, subin } from '../../../data/profile';

const Account = ({
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
  const accountTextareaRef = useRef<HTMLTextAreaElement>(null);

  const onClickProfile = useCallback(name => {
    console.log({ name });
    setWho(allProfile[name]);
    setOpen(true);
  }, []);

  const contactModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const accountCopy = useCallback(() => {
    if (accountTextareaRef.current) {
      accountTextareaRef.current.select();
      accountTextareaRef.current.setSelectionRange(0, 99999);
      document.execCommand('copy');

      alert('클립보드에 계좌번호가 복사되었습니다.');
    }
  }, [accountTextareaRef]);

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
                <span>{who['bank']}</span>
                <span>{`${who['account']}(${who['account3'] ? who['account3'] : who['name']})`}</span>
                <ModalContactLink>
                  <span onClick={accountCopy}>복사하기</span>
                  <AccountTextarea ref={accountTextareaRef} defaultValue={who['account2']} readOnly />
                </ModalContactLink>
              </ModalContact>
            </ModalBg>
          </ModalContainer>
        </Fade>
      </Modal>
    </>
  );
};

export default Account;
