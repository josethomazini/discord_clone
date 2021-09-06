import React from 'react';
import {
  Avatar, Container, HeadphoneIcon, Icons,
  MicIcon, Profile, SettingsIcon, UserData
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Jack Bauer</strong>
          <span>#9583945840</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;
