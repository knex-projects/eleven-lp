import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

import CustomerJorney from '@/components/Sections/CustomerJorneySection';
import HeroSection from '@/components/Sections/HeroSection';
import PartnersCarousel from '@/components/Partners/PartnersCarousel';
import ConsultForm from '@/components/ConsultForm';
import ServicesSection from '@/components/Services/ServicesSection';

export default function Home() {
    return (
        <>
            <Header page="home" />
            <HeroSection />
            <ServicesSection />
            <CustomerJorney />
            <PartnersCarousel />
            <ConsultForm />
            <Footer />
        </>
    );
}
