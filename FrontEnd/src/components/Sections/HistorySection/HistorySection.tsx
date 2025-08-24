import logoImg from "@/assets/images/logos/eleven-big-logo.svg";

export default function HistorySection() {
  return (
    <section className="w-screen p-15 bg-background flex items-center max-md:justify-center min-md:justify-evenly max-lg:flex-col ">
      <div className="flex items-center">
        <img
          src={logoImg}
          className="w-[175px] p-5 max-lg:w-[120px] min-lg:order-first "
        ></img>
        <h1 className="text-dark-text font-medium text-[50px] max-lg:hidden">ELEVEN Jr.</h1>
      </div>
      <div className=" ">
        <h1 className="text-dark-text text-[45px] pb-5 font-bold w-[80vw] max-w-[440px] max-lg:text-[30px] max-lg:text-center">
          Nossa História
        </h1>
        <h2 className="text-dark-text text-[20px] max-w-[440px] max-lg:text-center text-justify">
          Somos uma Empresa Júnior (EJ) vinculada ao Movimento Empresa Júnior,
          que surgiu da aspiração dos alunos de Relações Internacionais da
          UEPB em colocar em prática a teoria aprendida no curso e oferecer
          projetos de excelência, Atuando desde 2017, com o objetivo de
          inserir pequenas e médias empresas no mercado internacional.
        </h2>
      </div>
    </section>
  )
}