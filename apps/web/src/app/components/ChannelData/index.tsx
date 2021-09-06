import React, { useEffect, useRef } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Input, InputIcon, InputWrapper, Messages } from './styles';


const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
                const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Hello, world!" />

        <ChannelMessage
          author="Tony Almeida" date="01/01/2001" hasMention isBot
          content={
            <>
              Hello, <Mention>@Jack Bauer</Mention>
            </>
          }
        />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />

        <ChannelMessage
          author="Jack Bauer" date="01/01/2001" content="Alright!" />
      </Messages>

      <InputWrapper>
        <Input
          type="text"
          placeholder="Talk in free chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;
