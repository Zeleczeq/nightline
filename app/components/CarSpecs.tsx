export default function CarSpecs({ car }: any) {
  return (
    <div
      className="
      overflow-hidden

      rounded-[32px]

      border
      border-white/[0.08]

      bg-white/[0.01]

      grid
      md:grid-cols-4
      "
    >
      <SpecItem
        label="Jednostka napędowa"
        value={car.engine}
      />

      <SpecItem
        label="Moc"
        value={`${car.horsepower} KM`}
      />

      <SpecItem
        label="Przyspieszenie 0–100"
        value={car.acceleration}
      />

      <SpecItem
        label="Napęd"
        value={car.drive}
      />

      <SpecItem
        label="Prędkość maks."
        value={car.topSpeed}
      />

      <SpecItem
        label="Skrzynia biegów"
        value={car.gearbox}
      />

      <SpecItem
        label="Segment"
        value={car.category}
      />

      <SpecItem
        label="Cena od"
        value={`${car.pricePerDay} zł/dzień`}
      />
    </div>
  );
}

function SpecItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
      p-8

      border-r
      border-b

      border-white/[0.06]

      last:border-r-0
      "
    >
      <div
        className="
        text-[10px]

        uppercase

        tracking-[0.3em]

        text-white/30

        mb-4
        "
      >
        {label}
      </div>

      <div
        className="
        text-3xl

        font-semibold

        tracking-tight

        text-white
        "
      >
        {value}
      </div>
    </div>
  );
}