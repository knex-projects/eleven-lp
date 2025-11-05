import logoImg from "@/assets/images/logos/eleven-big-logo.svg";

export default function HistorySection() {
  return (
    <section className="w-screen p-15 bg-background flex items-center min-md:justify-evenly max-xl:flex-col-reverse lg:flex-row">
      <div className="flex items-center">
        <img
          src={logoImg}
          className="w-[175px] p-5 max-lg:mt-10 min-lg:order-first "
        ></img>
        <h1 className="text-dark-text font-medium text-[50px]">ELEVEN Jr.</h1>
      </div>
      <div>
        <h1 className="text-dark-text text-5xl pb-5 font-bold w-[80vw] max-w-[440px] max-lg:text-[30px] r">
          Nossa História
        </h1>
        <h2 className="text-dark-text text-[20px] max-w-[440px] text-justify">
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