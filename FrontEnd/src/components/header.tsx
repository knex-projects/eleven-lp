import { MenuIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";


type HeaderProps = {
  page: string;
};
export function Header({page}:HeaderProps) {
 

  return (
    <section className="w-screen h-[146px] backdrop-blur-lg bg-[#6C6C6C40]  fixed top-0 grid justify-items-center content-center  max-[760px]:h-[104px] ">
      <img
        src="/Logo.svg"
        className="w-[100px] h-[100px]  max-[760px]:w-[72px]  max-[760px]:h-[72px]"
      ></img>
      <Popover>
        <PopoverTrigger className=" absolute right-5 top-7 pb-6 min-md:hidden">
          <MenuIcon color="#FFFFFF" size={48} />
        </PopoverTrigger>
        <PopoverContent className="w-[100vw] min-[761px]:hidden backdrop-blur-lg bg-[#6C6C6C40] border-b-[1px] border-t-[1px] border-[#6C6C6C] border-l-0 border-r-0 rounded-none text-[#FFFFFF] text-center  grid text-[24px] animate- p-0">
          <h1 className=" border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
            Home
          </h1>
          <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
            Sobre nós
          </h1>
          <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
            Soluções
          </h1>
          <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
            Cases
          </h1>
          <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
            Materiais gratuitos
          </h1>
          <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">Blog</h1>
        </PopoverContent>
      </Popover>
      <div className="border-b-[1px] border-t-[1px]  border-[#6C6C6C] w-screen h-[46px] justify-center items-center flex gap-13 text-[#FFFFFF] text-[24px] font-normal max-[644px]:absolute max-[760px]:hidden max-[1000px]:text-[2.5vw] max-[1000px]:gap-10 ">
        <h1 className="group">
          Home
          <div className={`h-[2px] w-[0%]  bg-blue-400 ${page === 'Home'?' w-[100%]':'animate-[growRightToLeft_1s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_1s_ease-in_forwards]'}  group-hover:bg-white`}></div>
        </h1>
        <h1 className="group">
          Sobre nós
          <div className={`h-[2px] w-[0%]  bg-blue-400 ${page === 'Sobrenos'?' w-[100%]':'animate-[growRightToLeft_1s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_1s_ease-in_forwards]'}  group-hover:bg-white`}></div>
        </h1>
        <h1 className="group">
          Soluções
          <div className={`h-[2px] w-[0%]  bg-blue-400 ${page === 'Soluções'?' w-[100%]':'animate-[growRightToLeft_1s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_1s_ease-in_forwards]'}  group-hover:bg-white`}></div>
        </h1>
        <h1 className="group">
          Materiais gratuitos
          <div className={`h-[2px] w-[0%]  bg-blue-400 ${page === 'Materiais'?' w-[100%]':'animate-[growRightToLeft_1s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_1s_ease-in_forwards]'}  group-hover:bg-white`}></div>
        </h1>
        <h1 className="group">
          Cases
          <div className={`h-[2px] w-[0%]  bg-blue-400 ${page === 'Cases'?' w-[100%]':'animate-[growRightToLeft_1s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_1s_ease-in_forwards]'}  group-hover:bg-white`}></div>
        </h1>
        <h1 className="group">
          Blog
          <div className={`h-[2px] w-[0%]  bg-blue-400 ${page === 'Blog'?' w-[100%]':'animate-[growRightToLeft_1s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_1s_ease-in_forwards]'}  group-hover:bg-white`}></div>
        </h1>
      </div>
    </section>
  );
}
