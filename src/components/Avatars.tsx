import React from 'react';
import { AvatarGroup, Avatar } from '@chakra-ui/react';

const Avatars: React.FC = () => {
  return (
    <AvatarGroup size="md">
      <Avatar src="/assets/avatars/avatar-1.png" width="32px" height="32px" />
      <Avatar src="/assets/avatars/avatar-2.png" width="32px" height="32px" />
      <Avatar src="/assets/avatars/avatar-3.png" width="32px" height="32px" />
      <Avatar src="/assets/avatars/avatar-4.png" width="32px" height="32px" />
      <Avatar src="/assets/avatars/avatar-5.png" width="32px" height="32px" />
    </AvatarGroup>
  );
};

export default Avatars;
