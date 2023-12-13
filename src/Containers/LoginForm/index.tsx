'use client';

import { Button, Input } from 'Components';
import { useState } from 'react';

export const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleClick = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="py-5 px-6 flex flex-col items-center bg-white rounded-xl md:px-9 md:py-10">
        <h2 className="mb-5 title md:mb-8">
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h2>
        <div className="flex flex-col gap-3 mb-5 md:gap-6 md:mb-6">
          <Input
            value={email}
            onChange={setEmail}
            label="Email"
          />
          <Input
            value={password}
            onChange={setPassword}
            label="Пароль"
            isPassword
          />
          <button
            className="text-sm text-blue-700 self-start underline"
            onClick={onHandleClick}
          >
            {isLogin ? 'Регистрация' : 'Авторизация'}
          </button>
        </div>
        <Button
          onClick={() => {}}
          isFullWidth
        >
          {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </div>
    </div>
  );
};
