"use client";

import { useState } from "react";

export default function BookingForm({ car }: any) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
    notes: "",
  });

  async function handleSubmit(
    
    
    e: React.FormEvent

    
  ) {

    e.preventDefault();

 if (
    new Date(form.returnDate) <=
    new Date(form.pickupDate)
  ) {
    alert(
      "Data zwrotu musi być późniejsza od daty odbioru."
    );

    return;
  }

    try {

      console.log({
  carSlug: car?.slug,
  carName: `${car?.brand} ${car?.model}`,
  pricePerDay: car?.pricePerDay,
});

      const response = await fetch(
        "https://srv101869.seohost.com.pl/api/saveReservation.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

         body: JSON.stringify({
  ...form,

  carSlug: car.slug,

  carName: `${car.brand} ${car.model}`,

  pricePerDay: car.pricePerDay,
}),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Zapytanie zostało wysłane.");

        setForm({
          fullName: "",
          email: "",
          phone: "",
          pickupLocation: "",
          pickupDate: "",
          returnDate: "",
          notes: "",
        });
      } else {
        alert("Wystąpił błąd podczas wysyłania.");
      }
    } catch {
      alert("Nie udało się połączyć z serwerem.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
      rounded-[32px]
      border
      border-white/[0.08]

      bg-white/[0.01]

      p-8
      "
    >
      <div
        className="
        grid
        md:grid-cols-2
        gap-4
        "
      >
        <div>
          <label className="block text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
            Imię i nazwisko
          </label>

          <input
            type="text"
            required
            value={form.fullName}
            onChange={(e) =>
              setForm({
                ...form,
                fullName: e.target.value,
              })
            }
            className="
            w-full
            bg-black
            border
            border-white/10
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:border-white/25
            "
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
            E-mail
          </label>

          <input
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="
            w-full
            bg-black
            border
            border-white/10
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:border-white/25
            "
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
            Telefon
          </label>

          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="
            w-full
            bg-black
            border
            border-white/10
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:border-white/25
            "
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
            Miejsce odbioru
          </label>

          <input
            type="text"
            required
            placeholder="Warszawa, hotel, lotnisko..."
            value={form.pickupLocation}
            onChange={(e) =>
              setForm({
                ...form,
                pickupLocation: e.target.value,
              })
            }
            className="
            w-full
            bg-black
            border
            border-white/10
            rounded-2xl
            px-4
            py-3
            outline-none
            focus:border-white/25
            "
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
            Data odbioru
          </label>

          <input
            type="date"
            required
            value={form.pickupDate}
            onChange={(e) =>
              setForm({
                ...form,
                pickupDate: e.target.value,
              })
            }
            className="
            w-full
            bg-black
            border
            border-white/10
            rounded-2xl
            px-4
            py-3
            "
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
            Data zwrotu
          </label>

          <input
            type="date"
            required
            value={form.returnDate}
            onChange={(e) =>
              setForm({
                ...form,
                returnDate: e.target.value,
              })
            }
            className="
            w-full
            bg-black
            border
            border-white/10
            rounded-2xl
            px-4
            py-3
            "
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3">
          Dodatkowe informacje
        </label>

        <textarea
          rows={5}
          value={form.notes}
          onChange={(e) =>
            setForm({
              ...form,
              notes: e.target.value,
            })
          }
          className="
          w-full
          bg-black
          border
          border-white/10
          rounded-2xl
          px-4
          py-3
          resize-none
          "
        />
      </div>

      <div
        className="
        mt-8
        pt-6
        border-t
        border-white/[0.06]
        flex
        justify-end
        "
      >
        <button
          type="submit"
          className="
          px-8
          py-3

          rounded-full

          bg-white
          text-black

          font-semibold

          hover:opacity-90

          transition
          "
        >
          Wyślij zapytanie
        </button>
      </div>
    </form>
  );
}