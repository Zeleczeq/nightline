import CarCard from "./CarCard";
import { cars } from "../data/cars";

export default function CarGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 xl:px-8">
      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </div>
  );
}