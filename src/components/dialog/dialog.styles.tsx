import styled from '@emotion/styled';

const DimmStyle = styled.div`
  overflow-y: hidden;
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  width: 600px;
  height: 600px;
  border-radius: 10px;
  background-color: #fff;
`;

const Title = styled.strong`
  display: block;
  padding: 20px;
  border-bottom: 1px solid #bebebe;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
`;

const Body = styled.div`
  overflow-y: auto;
  padding: 50px;
`;

const Foot = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
  margin-top: auto;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid #bebebe;
`;

const CloseButton = styled.button`
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

export const DialogStyle = {
  DimmStyle,
  Box,
  Title,
  Body,
  Foot,
  CloseButton,
};
