import Benefits from "@/components/home/Benefits";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Providers from "@/components/home/Providers";
import Optimization from "@/components/home/Optimization";
import Acquisition from "@/components/home/Acquisition";
import Dynamic from "@/components/home/Dynamic";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Stats />
      <Services />
      <Providers />
      <Optimization />
      <Acquisition />
      <Dynamic />
      <Testimonials />
    </>
  );
}
