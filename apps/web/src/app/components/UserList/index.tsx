import React from 'react';
import { Avatar, Container, Role, User } from './styles';

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({
  nickname, isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Available</Role>
      <UserRow nickname="Jacko" />

      <Role>Offline</Role>
      <UserRow nickname="Tony" isBot />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />

      <Role>Available</Role>
      <UserRow nickname="Dummy" />
    </Container>
  )
}

export default UserList;
