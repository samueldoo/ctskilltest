import Image from "next/image";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
export default function Home() {
  return (
    <div>
      <Hero backgroundImage='/photoHero.png' />
      <History backgroundImage='/peak.png' />
      <Team />
      <Schedule backgroundImage='/cloud.png' />
      <Footer />
      
    </div>
  );
}
