import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
      mt-32

      border-t
      border-white/[0.05]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        px-6
        py-24
        "
      >
        <div
          className="
          grid
          lg:grid-cols-4
          gap-16
          "
        >
          {/* LOGO */}

          <div>
            <h3
              className="
              text-[28px]
              font-bold
              tracking-tight
              text-white
              "
            >
              NIGHTLINE/GARAGE
            </h3>

            <p
              className="
              mt-5
              max-w-xs

              text-white/45
              leading-7
              "
            >
              Ekskluzywna flota samochodów sportowych,
              luksusowych i superaut dostępnych
              na terenie całej Polski.
            </p>
          </div>

          {/* FLOTA */}

          <div>
            <h4
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]

              text-white/35

              mb-6
              "
            >
              Flota
            </h4>

            <div className="flex flex-col gap-4">
              <Link href="#" className="text-white/75 hover:text-white transition">
                Sportowe
              </Link>

              <Link href="#" className="text-white/75 hover:text-white transition">
                Superauta
              </Link>

              <Link href="#" className="text-white/75 hover:text-white transition">
                Luksusowe
              </Link>

              <Link href="#" className="text-white/75 hover:text-white transition">
                SUV
              </Link>
            </div>
          </div>

          {/* FIRMA */}

          <div>
            <h4
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]

              text-white/35

              mb-6
              "
            >
              Firma
            </h4>

            <div className="flex flex-col gap-4">
              <Link href="#" className="text-white/75 hover:text-white transition">
                O nas
              </Link>

              <Link href="#" className="text-white/75 hover:text-white transition">
                Dlaczego my
              </Link>

              <Link href="#" className="text-white/75 hover:text-white transition">
                Kontakt
              </Link>

              <Link href="#" className="text-white/75 hover:text-white transition">
                Regulamin
              </Link>
            </div>
          </div>

          {/* KONTAKT */}

          <div>
            <h4
              className="
              text-[10px]
              uppercase
              tracking-[0.35em]

              text-white/35

              mb-6
              "
            >
              Kontakt
            </h4>

            <div className="flex flex-col gap-4 text-white/75">
              <p>+48 500 000 000</p>

              <p>kontakt@nightlinegarage.pl</p>

              <p>
                Rzeszów • Krosno • Warszawa
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
          mt-24
          pt-8

          border-t
          border-white/[0.05]

          flex
          flex-col
          md:flex-row

          justify-between
          gap-4
          "
        >
          <p className="text-white/35 text-sm">
            © 2025 Nightline Garage. Wszelkie prawa zastrzeżone.
          </p>

          <p className="text-white/25 text-sm">
            Stworzone dla wymagających kierowców.
          </p>
        </div>
      </div>
    </footer>
  );
}