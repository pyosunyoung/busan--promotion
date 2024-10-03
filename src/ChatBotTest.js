import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import botIcon from './images/부산시마스코트부기.png'
const ChatBotTest = () => {
  const steps=[
    {
      id: '1',
      message: '안녕 나는 부산시 마스코트 부기야 궁금한거 있으면 물어봐',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: '그만 대화 하기', trigger: '4' },
        { value: 2, label: '이 사이트 소개', trigger: '3' },
        { value: 3, label: '부산 교통', trigger: '2' },
      ],
    },
    {
      id: '3',
      message: '이 웹사이트는 부산에서의 삶과 여행을 종합적으로 체험할 수 있는 플랫폼으로, 관광 명소와 주거 정보, 그리고 환경 요소를 연결하여 사용자에게 맞춤형 정보를 제공합니다. .',
      trigger: '2',
    },

    {
      id: '3',
      message: '부산의 중심은 교통이 활발해.',
      trigger: '2',
    },
    {
      id: '4',
      message: '안녕!',
      end: true,
    },
  ]

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          hideHeader={true}
          placeholder={'채팅 불가능'}
          botAvatar={botIcon}
        />
      </ThemeProvider>
    </div>
  )
}

export default ChatBotTest;
