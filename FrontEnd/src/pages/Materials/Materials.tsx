import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MaterialsSection from "@/components/Sections/MaterialsSection";
import FreeMaterialsSection from "@/components/Sections/FreeMaterialsSection";

export default function Materials(){
    return(
        <>
        <Header page="Materiais"/>
        <MaterialsSection/>
        <FreeMaterialsSection/>
        <Footer/>
        </>
    )
}