import React from 'react';
import { Container, Description, HashTagIcon, Separator, Title } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />
      <Title>free chat</Title>
      <Separator />
      <Description>Free channel for chating</Description>
    </Container>
  )
}

export default ChannelInfo;
