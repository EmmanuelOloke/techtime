import React from 'react';
import { AvatarGroup, Avatar } from '@chakra-ui/react';
import { AvatarWidth } from '@/types/avatar-width';

const Avatars: React.FC<AvatarWidth> = ({ width, height }) => {
  return (
    <AvatarGroup size="md">
      <Avatar src="/assets/avatars/avatar-1.png" width={width} height={height} />
      <Avatar src="/assets/avatars/avatar-2.png" width={width} height={height} />
      <Avatar src="/assets/avatars/avatar-3.png" width={width} height={height} />
      <Avatar src="/assets/avatars/avatar-4.png" width={width} height={height} />
      <Avatar src="/assets/avatars/avatar-5.png" width={width} height={height} />
    </AvatarGroup>
  );
};

export default Avatars;
