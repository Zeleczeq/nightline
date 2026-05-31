"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav
      className="
      fixed
      top-4
      left-1/2
      -translate-x-1/2

      z-50

      w-[92%]
      max-w-6xl
      "
    >
      <div
        className="
        h-[62px]

        px-6

        rounded-full

        border
        border-white/[0.06]

        bg-black/70

        backdrop-blur-2xl

        flex
        items-center
        justify-between

        shadow-[0_0_40px_rgba(0,0,0,.35)]
        "
      >
        {/* LOGO */}

        <Link href="/">
          <h1
            className="
            text-[22px]
            font-bold
            tracking-tight
            text-white
            "
          >
            NIGHTLINE
            <span className="text-white/35">
              /GARAGE
            </span>
          </h1>
        </Link>

        {/* MENU */}

        <ul
          className="
          hidden
          md:flex

          items-center

          gap-10

          text-[14px]
          text-white/45
          "
        >
          {[
            "Flota",
            "Kategorie",
            "Dlaczego My",
            "Kontakt",
          ].map((item) => (
            <li
              key={item}
              className="
              relative

              cursor-pointer

              transition-all
              duration-300

              hover:text-white
              "
            >
              {item}
            </li>
          ))}
        </ul>

        {/* BUTTON */}

        <button
          className="
          h-11

          px-6

          rounded-full

          bg-white

          text-black
          text-sm

          font-medium

          transition-all
          duration-300

          hover:scale-[1.03]
          "
        >
          Rezerwuj
        </button>
      </div>
    </nav>
  );
}