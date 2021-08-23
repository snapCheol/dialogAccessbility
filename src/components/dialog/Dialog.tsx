import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DialogStyle } from './dialog.styles';
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
  children?: React.ReactElement;
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  id,
  title,
  onConfirm,
  onCancle,
  onClose,
  confirmLabel = '확인',
  cancelLabel = '취소',
  children,
}) => {
  // 다이얼로그 컨테이너 ref 참조
  const dialogRef: React.MutableRefObject<HTMLDivElement | null> =
    React.useRef(null);

  const handleClickDimmed = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (dialogRef.current && onClose) {
      if (dialogRef.current === evt.target) {
        onClose();
      }
    }
  };

  // ESC 키를 누를 경우 다이얼로그 닫기 핸들러 함수
  const handleKeyPressClose = React.useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape' && onClose) onClose();
    },
    [onClose]
  );

  React.useEffect(() => {
    // 다이얼로그 컴포넌트가 마운트 되었을 때 키보드 이벤트 등록
    window.addEventListener('keyup', handleKeyPressClose);

    // 다이얼로그 컴포넌트가 언마운트 되기 직전 키보드 이벤트 등록해제
    return () => window.removeEventListener('keyup', handleKeyPressClose);
  }, [handleKeyPressClose]);

  const handleFocusMove = (evt: KeyboardEvent) => {
    if (dialogRef.current) {
      const focusableBtnElments = dialogRef.current.querySelectorAll('button');

      const { activeElement } = document;

      const firstFocusEl = focusableBtnElments && focusableBtnElments[0];
      const lastFocusEl =
        focusableBtnElments &&
        focusableBtnElments[focusableBtnElments.length - 1];

      const { key, shiftKey } = evt;

      const isFirstFocusEl = activeElement === firstFocusEl;
      const isLastFocusEl = activeElement === lastFocusEl;

      if (isFirstFocusEl) {
        if (key === 'Tab' && shiftKey) {
          evt.preventDefault();
          lastFocusEl?.focus();
        }
      }

      if (isLastFocusEl) {
        if (key === 'Tab' && !shiftKey) {
          evt.preventDefault();
          firstFocusEl?.focus();
        }
      }
    }
  };

  // 다이얼로그 팝업 시 포커스 자동 이동
  React.useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.setAttribute('tabindex', '-1');
      dialogRef.current.focus();

      // 다이얼로그 팝업 내 마우스 포커스 순환 유지
      window.addEventListener('keydown', handleFocusMove);
    }

    // 다이얼로그 팝업 시 바디 컨텐츠 스크롤 방지
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleFocusMove);
    };
  }, []);

  console.log('render');

  return (
    <DialogStyle.DimmStyle
      role='dialog'
      aria-labelledby={id}
      ref={dialogRef}
      onClick={handleClickDimmed}
    >
      <DialogStyle.Box>
        {title && <DialogStyle.Title id={id}>{title}</DialogStyle.Title>}
        <DialogStyle.Body>{children}</DialogStyle.Body>
        <DialogStyle.Foot>
          <Button label={cancelLabel} onClick={onCancle} />
          <Button label={confirmLabel} onClick={onConfirm} />
        </DialogStyle.Foot>
        <DialogStyle.CloseButton onClick={onClose}>
          <ScreenOut label='다이얼로그 닫기' />
          <FontAwesomeIcon icon={faTimes} />
        </DialogStyle.CloseButton>
      </DialogStyle.Box>
    </DialogStyle.DimmStyle>
  );
};

export default Dialog;
