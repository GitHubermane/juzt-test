'use client';

import { BtnType, Button } from 'Components';

export const Header = () => (
  <div className="flex justify-between items-center py-3 px-6 rounded-lg bg-white shadow-md">
    <div className="font-bold text-2xl">JUZT</div>
    <div className="flex items-center">
      <div className="mr-3">aaa@gmail.com</div>
      <Button
        onClick={() => {}}
        type={BtnType.danger}
      >
        Logout
      </Button>
    </div>
  </div>
);
