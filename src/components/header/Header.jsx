import React from 'react';

import { Button } from '../Button/button';

import 'header.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Header = () => {
  const {user, onClose } = useTelegram();

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'user-name'}>{user?.username}</span>
    </div>
  );
};
