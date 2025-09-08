import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import HistorySection from "@/components/Sections/HistorySection";
import AboutSection from "@/components/Sections/AboutSection";
import MissionSection from "@/components/Sections/MissionSection";
import ValuesSection from "@/components/Sections/ValuesSection";

export default function About() {
  return (
    <>
      <Header page="about-us" />
      <AboutSection/>
      <HistorySection/>
      <MissionSection/>
      <ValuesSection/>
      <Footer/>
    </>
  );
}
