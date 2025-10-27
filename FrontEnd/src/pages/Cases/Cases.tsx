import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import CasesSection from "@/components/Sections/CasesSection/CasesSection";
import MaterialsSection from "@/components/Sections/MaterialsSection";

export default function Cases() {
  return (
    <>
      <Header page="cases" />
      <CasesSection/>
      <Footer />
    </>
  );
}
