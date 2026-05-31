import Image from "next/image"

export default function Hero() {
  return (
    <section
  className="relative min-h-[90vh] md:min-h-[90vh] overflow-hidden bg-[var(--bg)] text-white select-none "
  id="home"
>
      <Image
        src="/hero.webp"
        alt="Nowoczesne strony internetowe dla firm – projekt Articx Digital"
        fill
        priority
        quality={60}
         draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
        className="object-cover object-center"
      />

=
    </section>
  )
}
