import type { FC, ReactNode } from 'react';
import { BtnType } from './BtnType';

type PropsType = {
  children: ReactNode;
  onClick: () => void;
  type?: BtnType;
};

export const Button: FC<PropsType> = ({
  children,
  onClick,
  type = BtnType.primary,
}) => {
  const isPrimary = type === BtnType.primary;
  const style = isPrimary ? 'btn-primary' : 'btn-danger';
  return (
    <button
      className={`${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
