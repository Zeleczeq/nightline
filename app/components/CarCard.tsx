import Link from "next/link";

export default function CarCard({ car }: any) {
  return (
    <Link
      href={`/cars/${car.slug}`}
      className="car-card group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
       <div
  className="
    absolute
    inset-0

    bg-no-repeat
    bg-center

    transition-transform
    duration-1000

    group-hover:scale-[1.05]
  "
  style={{
  backgroundImage: `url(${car.images[0]})`,
  backgroundSize: "105%",
  backgroundPosition: "center",
}}
/>

              
              
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/60
            via-transparent
            to-transparent
          "
        />

        <div
          className="
            absolute
            top-6
            left-6
            right-6

            flex
            items-center
            justify-between
          "
        >
          <h3
            className="
              text-white
              text-[20px]
              font-semibold
              tracking-tight
            "
          >
            {car.brand} {car.model}
          </h3>

          <span
            className="
              glass

              rounded-full

              px-3
              py-1

              text-[10px]
              uppercase

              tracking-[0.25em]

              text-white/50
            "
          >
            {car.category}
          </span>
        </div>
      </div>

      <div className="p-6 pt-2">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div
              className="
                text-[11px]
                uppercase

                tracking-[0.25em]

                text-white/35
              "
            >
              Od
            </div>

            <div className="mt-1">
              <span
                className="
                  text-silver-gradient

                  text-[42px]
                  leading-none

                  font-semibold
                "
              >
                {car.pricePerDay}zł
              </span>

              <span
                className="
                  ml-1

                  text-[16px]

                  text-white/50
                "
              >
                /Dzień
              </span>
            </div>
          </div>

          <span
            className="
              rounded-full

              border
              border-white/10

              px-5
              py-3

              text-sm
              text-white

              backdrop-blur-md

              transition-all

              group-hover:bg-white/5
              group-hover:border-white/20
            "
          >
             Zarezerwuj →
          </span>
        </div>

        <div
          className="
            mt-5
            pt-5

            border-t
            border-white/[0.06]

            text-[12px]
            uppercase

            tracking-[0.25em]

            text-white/40
          "
        >
          {car.horsepower} HP • {car.drive} • {car.gearbox}
        </div>
      </div>
    </Link>
  );
}