import { Header } from 'Containers';
import type { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => (
  <div className="px-6 py-3">
    <Header />
    {children}
  </div>
);
