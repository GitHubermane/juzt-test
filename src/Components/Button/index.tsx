import type { FC, ReactNode } from 'react';
import { BtnType } from './BtnType';

type PropsType = {
  children: ReactNode;
  onClick: () => void;
  type?: BtnType;
  isFullWidth?: boolean;
};

export const Button: FC<PropsType> = ({
  children,
  onClick,
  type = BtnType.primary,
  isFullWidth,
}) => {
  const isPrimary = type === BtnType.primary;

  const style = isPrimary ? 'btn-primary' : 'btn-danger';
  const fullWidth = isFullWidth ? 'w-full flex justify-center' : '';
  return (
    <button
      className={`${style} ${fullWidth}`}
      onClick={onClick}
    >
      <span className="flex items-center typography">{children}</span>
    </button>
  );
};
