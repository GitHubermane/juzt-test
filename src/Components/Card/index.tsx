'use client';

import { Button } from 'Components';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

type PropsType = {
  id: number;
  img: string;
  brand: string;
  model: string;
  price: number;
  year: number;
};

export const Card: FC<PropsType> = ({
  brand, id, model, price, year, img, 
}) => {
  const router = useRouter();

  const onHandleClick = () => {
    router.push(`cars/${id}`);
  };

  return (
    <div className="px-4 py-6 bg-white rounded-lg">
      <img
        className="w-full mb-5 rounded-lg"
        src={img}
        alt="Car"
      />
      <div className="flex flex-col mb-3 lg:mb-5">
        <h2 className="mb-3 text-lg font-semibold">{`${brand}, ${model}`}</h2>
        <span className="typography">{`Цена: ${price} руб.`}</span>
        <span className="typography">{`Год выпуска: ${year}`}</span>
      </div>
      <div className="flex justify-center">
        <Button onClick={onHandleClick}>Посмотреть</Button>
      </div>
    </div>
  );
};
