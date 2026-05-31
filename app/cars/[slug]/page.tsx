import { cars } from "@/app/data/cars";

import CarGallery from "@/app/components/CarGallery";
import CarSpecs from "@/app/components/CarSpecs";
import BookingForm from "@/app/components/BookingForm";
import Header from "@/app/components/header";
import CarCard from "@/app/components/CarCard";
import Footer from "@/app/components/footer";

export default async function CarPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const car = cars.find((c) => c.slug === slug);

    const relatedCars = cars
  .filter(
    c =>
      c.slug !== slug &&
      c.category === car?.category
  )
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);

if (relatedCars.length < 3) {
  const additionalCars = cars
    .filter(
      c =>
        c.slug !== slug &&
        !relatedCars.some(
          r => r.id === c.id
        )
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 3 - relatedCars.length);

  relatedCars.push(...additionalCars);
}
    
  if (!car) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-32">
        Auto nie istnieje.
      </main>
    );
  }

  return (
    <main
      className="
      max-w-7xl
      mx-auto
      px-6
      pt-24
      "
      >
          <Header/>
      {/* HERO */}

      <section
        className="
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >
        <div>
          <div
            className="
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-white/30
            mb-6
            "
          >
            {car.category} • {car.brand}
          </div>

          <h1
            className="
            text-5xl
            lg:text-7xl
            font-bold
            leading-none
            tracking-tight
            "
          >
            {car.brand}
            <br />
            {car.model}
          </h1>

          <p
            className="
            mt-8
            max-w-xl

            text-white/55
            leading-relaxed
            "
          >
            {car.description}
          </p>

          <div
            className="
            mt-10

            flex
            flex-wrap
            items-center
            gap-8
            "
          >
            <div>
              <div
                className="
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-white/30
                mb-2
                "
              >
                Od
              </div>

              <div
                className="
                text-5xl
                font-bold
                "
              >
                {car.pricePerDay}zł

                <span
                  className="
                  text-xl
                  font-normal
                  text-white/40
                  ml-2
                  "
                >
                  /dzień
                </span>
              </div>
            </div>

            <button
              className="
              px-6
              py-3

              rounded-full

              bg-white
              text-black

              font-medium

              hover:opacity-90

              transition
              "
            >
              Zarezerwuj →
            </button>
          </div>
        </div>

<div
  className="
  overflow-hidden

  rounded-[32px]
  "
>
  <img
    src={car.images[0]}
    alt=""
    className="
    
    w-full
    h-[520px]

    object-contain

    "
  />
</div>
      </section>

      {/* HIGHLIGHTS */}

     <section
  className="
  mt-20

  grid
  md:grid-cols-2
  xl:grid-cols-4

  gap-4
  "
>
  <div className="glass rounded-3xl p-6">
    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">
      Moc
    </div>

    <div className="text-lg font-medium">
      {car.horsepower} KM
    </div>
  </div>

  <div className="glass rounded-3xl p-6">
    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">
      Napęd
    </div>

    <div className="text-lg font-medium">
      {car.drive}
    </div>
  </div>

  <div className="glass rounded-3xl p-6">
    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">
      Silnik
    </div>

    <div className="text-lg font-medium">
      {car.engine}
    </div>
  </div>

  <div className="glass rounded-3xl p-6">
    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">
      Skrzynia
    </div>

    <div className="text-lg font-medium">
      {car.gearbox}
    </div>
  </div>
</section>

      {/* TECHNICAL DETAILS */}

      <section className="mt-28">
        <div
          className="
          text-[11px]
          uppercase
          tracking-[0.3em]
          text-white/30
          mb-4
          "
        >
          Specyfikacja
        </div>

        <h2
          className="
          text-4xl
          font-bold
          mb-10
          "
        >
    Dane techniczne
        </h2>

        <CarSpecs car={car} />
      </section>

      {/* BOOKING */}

      <section
        className="
        mt-28

        grid
        lg:grid-cols-2

        gap-16
        "
      >
        <div>
          <div
            className="
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-white/30
            mb-4
            "
          >
          Rezerwacja
          </div>

          <h2
            className="
            text-4xl
            font-bold
            mb-6
            "
          >
      Zarezerwuj samochód
          </h2>

          <p
            className="
            text-white/55
            max-w-md
            "
          >
            Wypełnij formularz, a skontaktujemy się z Tobą
w sprawie dostępności pojazdu oraz szczegółów
rezerwacji.
          </p>
        </div>

        <BookingForm car={ car} />
              
              
          </section>
          
          {/* PODOBNE AUTA */}

<section
  className="
  mt-32
  pt-20

  border-t
  border-white/[0.06]
  "
>
  <h2
    className="
    text-4xl
    font-bold

    mb-10
    "
  >
    Może Cię zainteresować
  </h2>

  <div
    className="
    grid

    md:grid-cols-2
    xl:grid-cols-3

    gap-8
    "
  >
    {relatedCars.map((car) => (
      <CarCard
        key={car.id}
        car={car}
      />
    ))}
  </div>
          </section>
             <Footer/>
      </main>
      
   
  );
}