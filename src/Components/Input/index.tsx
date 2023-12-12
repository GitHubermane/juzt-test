import type { FC } from 'react';
import React from 'react';

type PropsType = {
  value: string;
  onChange: (value: string) => void;
  isPassword?: boolean;
  label?: string;
  error?: string;
};

export const Input: FC<PropsType> = ({
  isPassword,
  label,
  error,
  value,
  onChange,
}) => {
  const inputErrorStyles = error ? 'border-red-500 text-red-500' : '';

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 typography">{label}</label>}
      <input
        value={value}
        className={`border px-3 py-1 border-sky-500 rounded-full typography ${inputErrorStyles}`}
        type={isPassword ? 'password' : 'text'}
        onChange={onHandleChange}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};
