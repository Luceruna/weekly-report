import React from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import logo from '../assets/react.svg';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from '@chatscope/chat-ui-kit-react';


const Chat: React.FC = () => {
  return (
    <div style={{position: 'relative', height:'500px'}}>
      <MainContainer>
        <ChatContainer>
            <MessageList>
                <Message
                    model={{
                        message: 'Hello my firend',
                        sentTime: 'just now',
                        sender: 'Joe',
                        position: 'normal',
                        direction: 'incoming',
                    }}
                >
                    <Avatar src={logo} name='react-logo' />
                </Message>
            </MessageList>
            <MessageInput placeholder='Type message here' />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chat;