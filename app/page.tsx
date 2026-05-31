import Image from "next/image";
import Header from "./components/header";
import MainHero from "./components/MainHero";
import CarGrid from "./components/CarGrid";
import WhyUs from "./components/why-us";
import Footer from "./components/footer";

export default function Home() {
  return (
      <main className="bg-black min-h-screen">

      <Header />
      {/* <Hero/> */}
      <MainHero />
      
      <CarGrid />
      
      <WhyUs />
      <Footer/>
    </main>
  );
}
