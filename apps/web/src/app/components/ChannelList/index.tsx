import React from 'react';
import ChannelButton from '../ChannelButton';
import { AddCategoryIcon, Category, Container } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text channels</span>
        <AddCategoryIcon title="Add a channel" />
      </Category>

      <ChannelButton channelName="free chat" />
      <ChannelButton channelName="work" />
      <ChannelButton channelName="game" />
      <ChannelButton channelName="sport" />
      <ChannelButton channelName="health" />
    </Container>
  )
}

export default ChannelList;
