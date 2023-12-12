import { Layout } from 'Components';
import { CarInfo } from 'Containers';
import type { FC } from 'react';

type PropsType = {
  params: {
    id: number;
  };
};

const CarPage: FC<PropsType> = () => (
  <Layout>
    <CarInfo />
  </Layout>
);

export default CarPage;
