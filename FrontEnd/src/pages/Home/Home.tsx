import CustomerJorney from '@/components/CustomerJorney';
import HeroSection from '@/components/HeroSection';
import PartnersCarousel from '@/components/Partnes/PartnersCarousel';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultForm from '@/components/ConsultForm';
import ServicesSection from '@/components/Services/ServicesSection';

export default function Home() {
    return (
        <>
            <Header page="Home" />
            <HeroSection />
            <ServicesSection />
            <CustomerJorney />
            <PartnersCarousel />
            <ConsultForm />
            <Footer />
        </>
    );
}
