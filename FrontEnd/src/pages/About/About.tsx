import Header from "../../components/layout/Header";
import logo from "../../assets/images/eleven-big-logo.svg";
import bgImg from "../../assets/images/bg-about-us.svg";
import Footer from "../../components/layout/Footer/footer";

export default function About() {
  return (
    <>
      <Header page="about-us" />
      <section
        className="w-screen h-[870px] bg-cover flex gap-28 max-xl:gap-20 items-center max-lg:flex-col justify-center pt-20 text-[#F0F0F0] bg-center max-md:pt-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div>
          <h1 className="text-[48px] font-bold  max-w-[493px] w-[86vw] max-sm:text-[32px] max-lg:text-[4.5vw] max-lg:pb-7">
            Prazer, somos a Eleven Consultoria!
          </h1>
          <iframe
            className="min-lg:hidden min-lg:absolute max-w-[389px] w-[86vw]"
            height="209"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <h2 className="text-[24px] font-normal  max-w-[481px] pt-10 text-[#CFCFCF] w-[88vw] max-lg:text-[2.5vw] max-sm:text-[16px] max-sm:pt-5">
            A Eleven oferece consultoria estratégica personalizada para expandir
            sua empresa no mercado internacional e fortalecer sua presença
            global.
          </h2>
        </div>

        <iframe
          className="max-lg:hidden max-lg:absolute w-[552px] h-[294px] max-xl:w-[452px]"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </section>
      <section className="w-screen h-[563px] bg-[#F0F0F0] flex items-center max-md:justify-center  min-md:justify-evenly   max-lg:flex-col ">
        <div className=" ">
          <h1 className="text-[#131737] text-[48px] max-sm:text-balance pb-10 font-bold w-[80vw] max-w-[441px] max-sm:pb-3  max-lg:max-w-[390px] max-lg:text-[32px]">
            Nossa História
          </h1>
          <h2 className="text-[#333333] flex  text-[24px] w-[80vw] max-[300px]:leading-[8vw] max-[160px]:leading-[9vw] max-w-[441px] max-sm:text-balance  font-normal max-md:max-w-[390px] max-md:pb-5 max-md:text-[16px] max-lg:text-[2.18vw]">
            Somos uma Empresa Júnior (EJ) vinculada ao Movimento Empresa Júnior,
            que surgiu da aspiração dos alunos de Relações Internacionais da
            UEPB em colocar em prática a teoria aprendida no curso e oferecer
            projetos de excelência, Atuando desde 2017, com o objetivo de
            inserir pequenas e médias empresas no mercado internacional.
          </h2>
        </div>
        <img
          src={logo}
          className="w-[525px] h-[188px] max-lg:w-[390px] max-lg:h-[139px] min-lg:order-first "
        ></img>
      </section>
      <section className="h-[200px] bg-black"></section>
      <Footer/>
    </>
  );
}
