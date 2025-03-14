import CarouselOne from "./components/customComponents/CarouselOne";
import Hero from "./components/Hero";
import Benefits from "./components/homepage/Benefits";
import FirstCards from "./components/homepage/FirstCards";
import SecondCard from "./components/homepage/SecondCard";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <FirstCards />
      <CarouselOne />
      <SecondCard />
      <Benefits />
    </main>
  )
}
