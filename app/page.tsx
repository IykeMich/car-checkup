import CarouselOne from "./components/customComponents/CarouselOne";
import FAQ from "./components/customComponents/FAQ";
import Hero from "./components/Hero";
import Benefits from "./components/homepage/Benefits";
import FirstCards from "./components/homepage/FirstCards";
import PopularCars from "./components/homepage/PopularCars";
import SecondCard from "./components/homepage/SecondCard";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <FirstCards />
      <CarouselOne />
      <SecondCard />
      <Benefits />
      <div className="pb-12">
      <FAQ/>
      </div>
      <PopularCars />
      
    </main>
  )
}
