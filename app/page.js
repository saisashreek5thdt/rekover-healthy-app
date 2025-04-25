import Banner from "./(Components)/Home/Banner";
import Clients from "./(Components)/Home/Clients";
import DoctorsTeam from "./(Components)/Home/DoctorsTeam";
import Features from "./(Components)/Home/Features";
import Pricing from "./(Components)/Home/Pricing";
import StepsSection from "./(Components)/Home/StepsSection";
import Testimonials from "./(Components)/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <Features />
      <StepsSection />
      <DoctorsTeam />
      <Pricing />
      <Testimonials />
    </>
  );
}
