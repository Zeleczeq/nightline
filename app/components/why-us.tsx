const benefits = [
  {
    number: "01",
    title: "Wyselekcjonowana flota",
    description:
      "Starannie dobrane samochody premium i sportowe, utrzymywane w perfekcyjnym stanie technicznym i wizualnym.",
  },
  {
    number: "02",
    title: "Pełne ubezpieczenie",
    description:
      "Każda rezerwacja obejmuje kompleksową ochronę, dzięki której możesz cieszyć się jazdą bez zbędnych zmartwień.",
  },
  {
    number: "03",
    title: "Wsparcie 24/7",
    description:
      "Nasz zespół pozostaje do Twojej dyspozycji przez całą dobę, niezależnie od miejsca i czasu podróży.",
  },
  {
    number: "04",
    title: "Szybka rezerwacja",
    description:
      "Minimum formalności, błyskawiczna obsługa i możliwość podstawienia auta pod wskazany adres.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="
      py-32
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6

        grid
        lg:grid-cols-2
        gap-20
        items-center
        "
      >
        {/* LEFT */}

        <div>
          <div
            className="
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-white/35
            mb-6
            "
          >
            — Dlaczego my
          </div>

          <h2
            className="
            text-4xl
            lg:text-5xl
            font-bold
            leading-none
            tracking-tight
            "
          >
            Stworzone dla
            <br />
            kierowców,
            <br />
            którzy oczekują więcej.
          </h2>

          <p
            className="
            mt-8
            max-w-xl

            text-lg
            text-white/55
            leading-relaxed
            "
          >
            Dbamy o każdy detal doświadczenia — od pierwszego
            kontaktu, przez odbiór pojazdu, aż po zakończenie
            wynajmu. Naszym celem jest zapewnienie obsługi na
            poziomie, którego oczekujesz od samochodów klasy premium.
          </p>
        </div>

        {/* RIGHT */}

        <div
          className="
          overflow-hidden

          rounded-[32px]

          border
          border-white/[0.08]

          bg-white/[0.01]

          grid
          md:grid-cols-2
          "
        >
          {benefits.map((item, index) => (
            <div
              key={item.number}
              className={`
                p-6

                ${
                  index !== 1 && index !== 3
                    ? "border-r border-white/[0.06]"
                    : ""
                }

                ${
                  index < 2
                    ? "border-b border-white/[0.06]"
                    : ""
                }
              `}
            >
              <div
                className="
                text-sm
                text-white/35
                mb-6
                "
              >
                {item.number}
              </div>

              <h3
                className="
                text-2xl
                font-semibold
                mb-4
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-white/50
                leading-relaxed
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}