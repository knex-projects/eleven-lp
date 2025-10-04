import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SolutionsSection from '@/components/Sections/SolutionsSection';

export default function Solucoes() {
    return (
        <>
            <Header page="solucoes" />

            {/* PLACEHOLDER */}
            <div className="h-[50vh] w-full bg-red-500 flex items-center justify-center">
                <h1 className="text-4xl text-white">Placeholder</h1>
            </div>
            {/* PLACEHOLDER */}

            <SolutionsSection />
            <Footer />
        </>
    );
}
