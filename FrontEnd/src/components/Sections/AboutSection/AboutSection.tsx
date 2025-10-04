import backgroundImage from "@/assets/images/backgrounds/bg-about-us.png";

export default function AboutSection() {
  return (
	<section
        className="w-screen h-[870px] bg-cover flex gap-28 max-xl:gap-20 items-center max-lg:flex-col justify-center pt-20 text-primary-text bg-center max-md:pt-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="space-y-6">
          <h1 className="text-[45px] font-bold  max-w-[493px] w-[86vw] max-lg:text-[40px]">
            Prazer, somos a Eleven Consultoria!
          </h1>
          <iframe
            className="ml-auto mr-auto min-lg:hidden min-lg:absolute max-w-[389px] w-[86vw]"
            height="209"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <h2 className="text-[24px] font-normal  max-w-[481px] pt-6 text-subtext w-[88vw] max-lg:text-[20px] text-justify">
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
  )
}