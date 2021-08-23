import { forwardRef, ForwardRefRenderFunction } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  label: string;
  onClick: (() => void) | undefined;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { type, label, onClick, ...resetProps },
  ref
) => {
  return (
    <ButtonStyle type={type} onClick={onClick} ref={ref} {...resetProps}>
      {label}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 45px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  & + & {
    margin-left: 10px;
  }
`;

export default forwardRef(Button);
