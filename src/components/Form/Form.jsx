import React, { useEffect, useState } from 'react';

import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Form = () => {
  const { tg } = useTelegram();

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('phisical');

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  useEffect(() => {
    tg.MainButton.setParams({ text: 'Отправить данные' });
  }, [tg.MainButton]);

  useEffect(() => {
    if (!country || !city) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city, tg.MainButton]);

  return (
    <div className={'form'}>
      <h3>Введите ваши данные</h3>
      <input
        type='text'
        className={'input'}
        placeholder={'Страна'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type='text'
        className={'input'}
        placeholder={'Город'}
        value={city}
        onChange={onChangeCity}
      />

      <select
        className={'select'}
        value={subject}
        onChange={onChangeSubject}>
        <option value={'phisical'}>Физ. лицо</option>
        <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  );
};
