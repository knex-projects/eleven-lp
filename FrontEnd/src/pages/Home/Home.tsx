import CustomerJorney from "../../components/CustomerJorney";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/layout/Header";

export default function Home() {
  return (
    <>
      <Header page="Home" />
      <HeroSection />
      <CustomerJorney />
    </>
  );
}
