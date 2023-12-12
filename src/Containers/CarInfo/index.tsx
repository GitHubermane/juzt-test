const car = {
  id: 1,
  img: 'https://www.autostat.ru/application/includes/blocks/big_photo/images/cache/000/106/629/49afb36d-670-0.jpg',
  brand: 'Audi',
  model: 'R8',
  price: 10000000,
  year: 2022,
  color: 'Серый',
  engineType: 'Бензиновый',
  transmission: 'Автоматическая',
  powerReserve: 900000,
  equipment: [
    'Регулировка сидений',
    'Обогрев руля',
    'Центральный замок',
    'Бортовой компьютер',
  ],
};

export const CarInfo = () => (
  <div className="py-7 px-6 bg-white rounded-lg">
    <div className="flex flex-col sm:flex-row">
      <img
        className="w-full h-full max-h-96 mb-4 rounded-lg sm:w-2/4 sm:mr-6"
        src={car.img}
        alt="Car"
      />
      <div>
        <h2 className="mb-3 title">{`${car.brand}, ${car.model}`}</h2>
        <div className="flex justify-between flex-wrap md:flex-nowrap md:flex-col">
          <div className="flex flex-col">
            <span className="typography">{`Цена: ${car.price} руб.`}</span>
            <span className="typography">{`Год выпуска: ${car.year}`}</span>
            <span className="typography">{`Цвет: ${car.color}`}</span>
          </div>
          <div className="flex flex-col">
            <span className="typography">{`Тип двигателя: ${car.engineType}`}</span>
            <span className="typography">{`Трансмиссия: ${car.transmission}`}</span>
            <span className="typography">
              {`Запас хода: ${car.powerReserve} км`}
            </span>
          </div>
        </div>
        <div>
          <span className="typography">Комплектация: </span>
          <ul className="list-disc list-inside">
            {car.equipment.map((i) => (
              <li
                className="typography pl-1"
                key={i}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
