import Banner from "./(Components)/Home/Banner";
import Clients from "./(Components)/Home/Clients";
import DoctorsTeam from "./(Components)/Home/DoctorsTeam";
import StepsSection from "./(Components)/Home/StepsSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <StepsSection />
      <DoctorsTeam />
    </>
  );
}
