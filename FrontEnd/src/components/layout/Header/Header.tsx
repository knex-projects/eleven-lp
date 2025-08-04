import { MenuIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/eleven-logo.svg";

type HeaderProps = {
  page: string;
};

export default function Header({ page }: HeaderProps) {
  return (
    <section className="w-screen h-[146px] backdrop-blur-lg bg-[#6C6C6C40]  fixed top-0 grid justify-items-center content-center  max-[760px]:h-[104px]">
      <img
        src={logo}
        className="w-[100px] h-[100px]  max-[760px]:w-[72px]  max-[760px]:h-[72px]"
      ></img>

      <Popover>
        <PopoverTrigger className=" absolute right-5 top-7 pb-6 min-md:hidden">
          <MenuIcon color="#FFFFFF" size={48} />
        </PopoverTrigger>
        <PopoverContent className="w-[100vw] min-[761px]:hidden backdrop-blur-lg bg-[#6C6C6C40] border-b-[1px] border-t-[1px] border-[#6C6C6C] border-l-0 border-r-0 rounded-none text-[#FFFFFF] text-center  grid text-[24px] animate- p-0">
          <nav>
            <h1 className=" border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
              <Link to="/">Home</Link>
            </h1>
            <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
              <Link to="/Sobre">Sobre nós</Link>
            </h1>
            <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
              <Link to="/Solucoes">Soluções</Link>
            </h1>
            <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
              <Link to="/Materiais">Materiais gratuitos</Link>
            </h1>
            <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
              <Link to="/Cases">Cases</Link>
            </h1>
            <h1 className="border-b-[1px] h-[52px] content-center border-[#6C6C6C]">
              <Link to="/Blog">Blog</Link>
            </h1>
          </nav>
        </PopoverContent>
      </Popover>

      <nav>
        <div className="border-b-[1px] border-t-[1px]  border-[#6C6C6C] w-screen h-[46px] justify-center items-center flex gap-13 text-[#FFFFFF] text-[24px] font-normal max-[644px]:absolute max-[760px]:hidden max-[1000px]:text-[2.5vw] max-[1000px]:gap-10 ">
          <h1 className="group">
            <Link to="/">Home</Link>
            <div
              className={`h-[2px] w-[0%]  bg-blue-400 ${
                page === "Home"
                  ? " w-[100%]"
                  : "animate-[growRightToLeft_1s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_1s_ease-in_forwards]"
              }  group-hover:bg-white`}
            ></div>
          </h1>
          <h1 className="group">
            <Link to="/Sobre">Sobre nós</Link>
            <div
              className={`h-[2px] w-[0%]  bg-blue-400 ${
                page === "Sobrenos"
                  ? " w-[100%]"
                  : "animate-[growRightToLeft_0.3s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]"
              }  group-hover:bg-white`}
            ></div>
          </h1>
          <h1 className="group">
            <Link to="/Solucoes">Soluções</Link>
            <div
              className={`h-[2px] w-[0%]  bg-blue-400 ${
                page === "Soluções"
                  ? " w-[100%]"
                  : "animate-[growRightToLeft_0.3s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]"
              }  group-hover:bg-white`}
            ></div>
          </h1>
          <h1 className="group">
            <Link to="/Materiais">Materiais gratuitos</Link>
            <div
              className={`h-[2px] w-[0%]  bg-blue-400 ${
                page === "Materiais"
                  ? " w-[100%]"
                  : "animate-[growRightToLeft_0.3s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]"
              }  group-hover:bg-white`}
            ></div>
          </h1>
          <h1 className="group">
            <Link to="/Cases">Cases</Link>
            <div
              className={`h-[2px] w-[0%]  bg-blue-400 ${
                page === "Cases"
                  ? " w-[100%]"
                  : "animate-[growRightToLeft_0.3s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]"
              }  group-hover:bg-white`}
            ></div>
          </h1>
          <h1 className="group">
            <Link to="/Blog">Blog</Link>
            <div
              className={`h-[2px] w-[0%]  bg-blue-400 ${
                page === "Blog"
                  ? " w-[100%]"
                  : "animate-[growRightToLeft_0.3s_ease-in-out_alternate]  group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]"
              }  group-hover:bg-white`}
            ></div>
          </h1>
        </div>
      </nav>
    </section>
  );
}
