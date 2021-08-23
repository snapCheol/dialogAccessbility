import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';
import Button from '../button/Button';
import ScreenOut from '../screenOut/ScreenOut';

interface SectionProps {
  title: string;
  buttonLabel: string;
  buttonClick: () => void;
  bgColor: string;
}

const Section: FunctionComponent<SectionProps> = ({
  title,
  buttonLabel,
  buttonClick,
  bgColor,
}) => {
  return (
    <SectionStyle bgColor={bgColor}>
      <ScreenOut label={title} as='h2' />
      <Button label={buttonLabel} onClick={buttonClick} />
    </SectionStyle>
  );
};

const SectionStyle = styled.article<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor && bgColor};
`;

export default Section;
