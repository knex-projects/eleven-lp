import { Header } from '../components/header';

export function Home() {
    return (
        <section className="flex h-[872px] w-screen flex-col content-center items-center justify-center bg-[url(/fundo.svg)] bg-cover text-center max-sm:bg-center">
            <Header page="Home" />
            <h1 className="min-md:pt-48 text-center text-[24px] font-medium text-[#F0F0F0] max-md:text-[16px] max-md:font-normal">
                ELEVEN CONSULTORIA
            </h1>
            <h1 className="w-[755px] text-[48px] font-medium text-[#FFFFFF] max-md:w-[80%] max-md:text-[32px] max-md:font-normal">
                Há <strong>8</strong> anos internacionalizando seu{' '}
                <strong>negócio!</strong>{' '}
            </h1>
            <h2 className="py-25 pt-10 text-[24px] font-normal text-[#F0F0F0] max-md:w-[75%] max-md:text-[18px] max-md:font-normal">
                Descubra como nossas soluções elevam os seus resultados!
            </h2>

            <button className="h-[64px] w-[325px] rounded-[10px] bg-[#3477DD] text-[24px] font-medium text-[#F0F0F0] hover:bg-[#1B3D70] hover:duration-700 max-sm:w-[80%]">
                <h1>Fale com um consultor</h1>
            </button>
        </section>
    );
}
