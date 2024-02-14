import Hero from "@/app/ui/Hero";
import About from "@/app/ui/About";
import Cardwrpper from "./ui/cardwrpper";

export default function page() {
  return (
    <main>
      <Hero />
      <About />
      <Cardwrpper/>
    </main>
  );
}