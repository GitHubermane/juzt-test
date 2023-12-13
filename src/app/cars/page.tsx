import { Card, Layout } from 'Components';

const cars = [
  {
    id: 1,
    img: '',
    brand: 'Audi',
    model: 'Q3',
    price: 1000000,
    year: 2014,
  },
  {
    id: 2,
    img: '',
    brand: 'Audi',
    model: 'Q3',
    price: 1000000,
    year: 2014,
  },
  {
    id: 3,
    img: '',
    brand: 'Audi',
    model: 'Q3',
    price: 1000000,
    year: 2014,
  },
  {
    id: 4,
    img: '',
    brand: 'Audi',
    model: 'Q3',
    price: 1000000,
    year: 2014,
  },
];

const CarsPage = () => (
  <Layout>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <Card
          key={car.id}
          {...car}
        />
      ))}
    </div>
  </Layout>
);

export default CarsPage;
