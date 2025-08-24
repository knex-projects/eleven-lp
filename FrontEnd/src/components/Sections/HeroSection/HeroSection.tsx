import bgImg from "@/assets/images/backgrounds/bg-hero-section.png";

export default function HeroSection() {
  return (
      <section className="w-full h-[872px] justify-center flex flex-col items-center text-center content-center bg-cover"
      style={{ backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center" }}>
        <h1 className="text-[24px] font-medium text-center text-primary-text max-md:text-[16px] min-md:pt-48 max-md:font-normal mb-12">
          ELEVEN CONSULTORIA
        </h1>
        <h1 className="text-primary-text w-[755px] text-[48px]  font-medium max-md:w-[80%] max-md:text-[32px] max-md:font-normal mb-12">
          Há <strong>8</strong> anos internacionalizando seu{" "}
          <strong>negócio!</strong>{" "}
        </h1>
        <h2 className="text-primary-text text-[24px] font-normal pt-10 py-25 max-md:w-[75%] max-md:text-[18px] max-md:font-normal">
          Descubra como nossas soluções elevam os seus resultados!
        </h2>

        <button className="text-primary-text w-[325px] h-[64px] text-[24px] rounded-[10px] bg-[#3477DD]  font-medium hover:duration-300 hover:bg-[#1B3D70] max-sm:w-[80%]">
          <h1>Fale com um consultor</h1>
        </button>
      </section>
  );
}