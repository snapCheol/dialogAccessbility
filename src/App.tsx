import { useRef, useState } from 'react';

import GlobalStyle from './components/style/GlobalStyle';
import Section from './components/section/Section';
import Dialog from './components/dialog/Dialog';

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleShowDialog = () => setDialogVisible(true);
  const handleCloseDialog = () => setDialogVisible(false);

  const sections = useRef([
    {
      id: 1,
      title: '섹션1',
      buttonLabel: '다이얼로그 띄우기',
      buttonClick: handleShowDialog,
      bgColor: '#1abc9c',
    },
    {
      id: 2,
      title: '섹션2',
      buttonLabel: '다이얼로그 띄우기',
      buttonClick: handleShowDialog,
      bgColor: '#e67e22',
    },
    {
      id: 3,
      title: '섹션3',
      buttonLabel: '다이얼로그 띄우기',
      buttonClick: handleShowDialog,
      bgColor: '#2980b9',
    },
    {
      id: 4,
      title: '섹션4',
      buttonLabel: '다이얼로그 띄우기',
      buttonClick: handleShowDialog,
      bgColor: '#e74c3c',
    },
    {
      id: 5,
      title: '섹션4',
      buttonLabel: '다이얼로그 띄우기',
      buttonClick: handleShowDialog,
      bgColor: '#8e44ad',
    },
    {
      id: 6,
      title: '섹션4',
      buttonLabel: '다이얼로그 띄우기',
      buttonClick: handleShowDialog,
      bgColor: '#2c3e50',
    },
    {
      id: 7,
      title: '섹션4',
      buttonLabel: '다이얼로그 띄우기',
      buttonClick: handleShowDialog,
      bgColor: '#95a5a6',
    },
  ]);

  return (
    <div className='container'>
      <GlobalStyle />
      {sections.current.map((section) => {
        const { id, title, buttonLabel, buttonClick, bgColor } = section;
        return (
          <Section
            key={id}
            title={title}
            buttonLabel={buttonLabel}
            buttonClick={buttonClick}
            bgColor={bgColor}
          />
        );
      })}
      {dialogVisible && (
        <Dialog
          id='dialog'
          title='다이얼로그'
          onConfirm={handleCloseDialog}
          onCancle={handleCloseDialog}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
}

export default App;
