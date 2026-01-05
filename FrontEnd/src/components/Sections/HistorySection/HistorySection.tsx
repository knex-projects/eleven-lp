import logoImg from "@/assets/images/logos/eleven-big-logo.svg";

export default function HistorySection() {
  return (
    <section className="w-full my-[85.5px] max-sm:my-[40px]  bg-background justify-center  flex items-center  ">
      <div className="flex xl:justify-between justify-center max-sm:w-[88vw] w-[80vw] max-w-[1152px]   max-xl:flex-col-reverse xl:flex-row">
        <div className="flex   items-center justify-center">
          <img
            src={logoImg}
            className="size-[188px]  max-lg:mt-10 min-lg:order-first max-sm:size-[139px] max-sm:p-0"
          ></img>
          <h1 className="text-dark-text font-medium text-[70.4px] max-sm:text-[50px]">ELEVEN Jr.</h1>
        </div>
        <div className="">
          <h1 className="text-dark-text text-5xl pb-5 font-bold w-[80vw] max-sm:w-[88vw] max-w-[441px] max-lg:text-[32px]  max-sm:max-w-[390px] ">
            Nossa História
          </h1>
          <h2 className="text-dark-text text-[24px] max-sm:w-[88vw]  max-lg:text-[20px] w-[80vw] xl:max-w-[441px] text-justify max-sm:text-[16px] ">
            Somos uma Empresa Júnior (EJ) vinculada ao Movimento Empresa Júnior,
            que surgiu da aspiração dos alunos de Relações Internacionais da
            UEPB em colocar em prática a teoria aprendida no curso e oferecer
            projetos de excelência, Atuando desde 2017, com o objetivo de
            inserir pequenas e médias empresas no mercado internacional.
          </h2>
        </div>
      </div>
    </section>
  )
}