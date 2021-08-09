import React, { useCallback, useRef } from 'react';

import { AccountContainer, AccountTextarea, CopyButton } from './style';
import allProfile from '../../../data/profile';

const Account = ({ who }: { who: 'subin' | 'hyeonsu' | 'bongsug' | 'chaeeun' | 'sihong' | 'dagyeom' }) => {
  const accountTextareaRef = useRef<HTMLTextAreaElement>(null);

  const accountCopy = useCallback(() => {
    if (accountTextareaRef.current) {
      accountTextareaRef.current.select();
      accountTextareaRef.current.setSelectionRange(0, 99999);
      document.execCommand('copy');

      alert('클립보드에 계좌번호가 복사되었습니다.');
    }
  }, [accountTextareaRef]);

  return (
    <AccountContainer>
      <span>{allProfile[who]['bank']}</span>
      <span>{`${allProfile[who]['account']} (${
        allProfile[who]['account3'] ? allProfile[who]['account3'] : allProfile[who]['name']
      })`}</span>
      <CopyButton onClick={accountCopy}>복사하기</CopyButton>
      <AccountTextarea ref={accountTextareaRef} defaultValue={allProfile[who]['account2']} readOnly />
    </AccountContainer>
  );
};

export default Account;
