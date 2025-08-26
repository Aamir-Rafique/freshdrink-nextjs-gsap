import Navbar from "@/components/Navbar";
import AboutUs from "@/sections/AboutUs";
import Art from "@/sections/Art";
import Hero from "@/sections/Hero";
import DrinkMenu from "@/sections/DrinkMenu";
import Contact from "@/sections/Contact";
import HeroBottom from "@/sections/HeroBottom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroBottom/>
      <AboutUs/>
      <Art /> 
      <DrinkMenu />
      <Contact />

    </div>
  );
}
