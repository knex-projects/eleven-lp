import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import OurSolutionsSection from '@/components/Sections/OurSolutionsSection';
import SolutionsSection from '@/components/Sections/SolutionsSection';

export default function Solucoes() {
    return (
        <>
            <Header page="solucoes" />

            <OurSolutionsSection />
            <SolutionsSection />
            <Footer />
        </>
    );
}
