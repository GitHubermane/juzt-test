"use client";

import { BtnType, Button } from "Components";

export const Header = () => (
  <div className="py-3 px-6 rounded-lg bg-white">
    <Button
      onClick={() => {}}
      type={BtnType.danger}
    >
      Logout
    </Button>
  </div>
);
