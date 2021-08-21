import { FunctionComponent, ReactElement, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '../button/Button';
import ScreenOut from '../screenOut/ScreenOut';

interface DialogProps {
  id?: string;
  title?: string;
  onConfirm?: () => void;
  onCancle?: () => void;
  onClose?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  children?: ReactElement;
}

const Dialog: FunctionComponent<DialogProps> = ({
  id,
  title,
  onConfirm,
  onCancle,
  onClose,
  confirmLabel = '확인',
  cancelLabel = '취소',
  children,
}) => {
  // ESC 키를 누를 경우 다이얼로그 닫기 핸들러 함수
  const handleKeyPressClose = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') onClose && onClose();
    },
    [onClose]
  );

  useEffect(() => {
    // 다이얼로그 컴포넌트가 마운트 되었을 때 키보드 이벤트 등록
    window.addEventListener('keydown', handleKeyPressClose);

    // 다이얼로그 컴포넌트가 언마운트 되기 직전 키보드 이벤트 등록해제
    return () => window.removeEventListener('keydown', handleKeyPressClose);
  }, [handleKeyPressClose]);

  return (
    <DialogDimmStyle role='dialog' aria-labelledby={id}>
      <DialogBox>
        {title && <DialogTitle id={id}>{title}</DialogTitle>}
        <DialogBody>{children}</DialogBody>
        <DialogFoot>
          <Button label={cancelLabel} onClick={onConfirm} />
          <Button label={confirmLabel} onClick={onCancle} />
        </DialogFoot>
        <DialogCloseButton onClick={onClose}>
          <ScreenOut label='다이얼로그 닫기' />
          <FontAwesomeIcon icon={faTimes} />
        </DialogCloseButton>
      </DialogBox>
    </DialogDimmStyle>
  );
};

const DialogDimmStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  width: 600px;
  height: 600px;
  border-radius: 10px;
  background-color: #fff;
`;

const DialogTitle = styled.strong`
  display: block;
  padding: 20px;
  border-bottom: 1px solid #bebebe;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
`;

const DialogBody = styled.div`
  overflow-y: auto;
  padding: 50px;
`;

const DialogFoot = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
  margin-top: auto;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid #bebebe;
`;

const DialogCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #ededed;
  font-size: 20px;
  cursor: pointer;
`;

export default Dialog;
