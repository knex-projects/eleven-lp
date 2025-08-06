import CustomerJorney from "../../components/CustomerJorney";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer/footer";

export default function Home() {
  return (
    <>
      <Header page="Home" />
      <HeroSection />
      <CustomerJorney />
      <Footer/>
    </>
  );
}
