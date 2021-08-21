import React, { ElementType, FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface ScreenOutProps {
  as?: ElementType;
  label: string;
}

const ScreenOut: FunctionComponent<ScreenOutProps> = ({
  as = 'span',
  label,
}) => {
  return <ScreenOutStyle as={as}>{label}</ScreenOutStyle>;
};

const ScreenOutStyle = styled.span`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

export default ScreenOut;
