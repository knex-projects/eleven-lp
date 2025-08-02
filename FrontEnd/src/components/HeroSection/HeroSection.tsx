import bgImg from "../../assets/images/bg-hero-section.svg";

export default function HeroSection() {
  return (
      <section className="w-full h-[872px] bg-cover justify-center flex flex-col items-center  text-center content-center max-sm:bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}>
        <h1 className="text-[24px] font-medium text-center text-[#F0F0F0] max-md:text-[16px] min-md:pt-48 max-md:font-normal mb-12">
          ELEVEN CONSULTORIA
        </h1>
        <h1 className="w-[755px] text-[48px]  font-medium text-[#FFFFFF] max-md:w-[80%] max-md:text-[32px] max-md:font-normal mb-12">
          Há <strong>8</strong> anos internacionalizando seu{" "}
          <strong>negócio!</strong>{" "}
        </h1>
        <h2 className="text-[#F0F0F0] text-[24px] font-normal pt-10 py-25 max-md:w-[75%] max-md:text-[18px] max-md:font-normal">
          Descubra como nossas soluções elevam os seus resultados!
        </h2>

        <button className="text-[#F0F0F0] w-[325px] h-[64px] text-[24px] rounded-[10px] bg-[#3477DD]  font-medium hover:duration-300 hover:bg-[#1B3D70] max-sm:w-[80%]">
          <h1>Fale com um consultor</h1>
        </button>
      </section>
  );
}