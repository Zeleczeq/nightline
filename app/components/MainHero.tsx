import Image from "next/image";

export default function MainHero() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      text-white
      select-none
      "
      id="home"
    >
      {/* obraz */}

      <Image
        src="/cars/hero-image.jpg"
        alt="Wypożyczalnia samochodów sportowych"
        fill
        priority
        quality={100}
        draggable={false}
        sizes="100vw"
        className="
        object-cover
        object-center
        "
      />

      {/* ciemna nakładka */}

      <div
        className="
        absolute
        inset-0
        bg-black/45
        "
      />

      {/* gradient z lewej dla tekstu */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black
        via-black/55
        to-transparent
        "
      />

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        flex-col
        justify-center
        px-6
        "
      >

        {/* <div
          className="
          inline-flex
          w-fit
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-5
          py-2
          text-xs
          tracking-[4px]
          text-white/60
          uppercase
          mb-8
          "
        >
          ● SAMOCHODY PREMIUM
        </div> */}

        <h1
          className="
          font-[family:var(--font-space)]
          text-5xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          leading-[0.95]
          tracking-[-3px]
          max-w-4xl
          "
        >
          Wypożyczalnia 
          <br />

          <span className="text-white/90">
            samochodów premium
          </span>
        </h1>

        <p
          className="
          mt-8
          max-w-xl
          text-lg
          text-white/65
          leading-8
          "
        >
          Odkryj wyjątkowe samochody stworzone dla osób,
          które oczekują czegoś więcej niż zwykłej jazdy.
          Moc, styl i emocje w jednym miejscu.
        </p>

      </div>
    </section>
  );
}