import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import HistorySection from '@/components/Sections/HistorySection';
import AboutSection from '@/components/Sections/AboutSection';
import MissionSection from '@/components/Sections/MissionSection';
import ValuesSection from '@/components/Sections/ValuesSection';
import DepoinmentSection from '@/components/Sections/DepoimentSection';

export default function About() {
    return (
        <>
            <Header page="about-us" />
            <AboutSection />
            <HistorySection />
            <MissionSection />
            <ValuesSection />
            <DepoinmentSection />
            <Footer />
        </>
    );
}
