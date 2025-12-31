import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6"; //Ainda não tem o logo X no Io5
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/eleven-logo.svg";
import "@/assets/css/footer/footer.css";

export default function Footer() {
  return (
    <footer className="text-primary-text lg:px-[8.8%]  max-sm:px-[6%] max-sm:pt-16 px-12 pt-24 bg-footer-background h-full">
      <div className="flex flex-wrap flex-col sm:flex-row text-muted-subtext items-start justify-center">
        <ul className="min-w-50 m-2.5 flex gap-3">
          <div>
            <h1 className="text-primary-text mb-2.5 text-[1.125rem]">
              Fale conosco
            </h1>
            <li>
              <Link to={"https://wa.me/5521975922237"}>
                +55 (21) 97592-2237
              </Link>
            </li>
            <li>
              <Link to={"ElevenJr.com.br"}>ElevenJr.com.br</Link>
            </li>
            <li>
              <Link to={"mailto:vendas.elevenjr@gmail.com"}>
                vendas.elevenjr@gmail.com
              </Link>
            </li>
          </div>

          <div className="flex-auto sm:hidden">
            <h1 className=" text-primary-text mb-2.5 text-[1.125rem]">
              Parceiros
            </h1>
            <li>
              <a href="/Materiais#Material">
                Venha ser um Parceiro
              </a>
            </li>
          </div>
        </ul>

        <ul className="min-w-50 m-2.5 flex-auto pb-5">
          <h1 className="text-primary-text mb-2.5 text-[1.125rem]">
            Materiais Gratuitos
          </h1>
          <li>
            <a href="/Materiais#Material" >
             Manual do congressista
            </a>
          </li>{" "}
          {/*TODO: Add link*/}
          <li>
            <a href="/Materiais#Material" >
             Capacitação LinkedIn
            </a>
          </li>{" "}
          {/*TODO: Add link*/}
        </ul>

        <ul className="min-w-50 m-2.5 flex-auto">
          <h1 className="text-primary-text mb-2.5 text-[1.125rem]">
            Nossa localização
          </h1>
          <li>
            <Link to={"https://maps.app.goo.gl/z9Qb3vLRjimrj7M36"}>
              Rua Horácio Trajano de Oliveira
              <br /> João Pessoa - PB 58071-470, BR
            </Link>
          </li>
        </ul>

        <ul className="min-w-50 m-2.5 flex-auto max-sm:hidden">
          <h1 className="text-primary-text mb-2.5 text-[1.125rem]">
            Parceiros
          </h1>
          <li>
            <a href="/#Form">
              Venha ser um Parceiro
            </a>
          </li>
        </ul>

        <ul className="min-w-50 m-2.5 flex-auto max-sm:hidden">
          <h1 className="text-primary-text mb-2.5 text-[1.125rem]">Cases</h1>
          <li>
            <a   href="/Cases#Cases">Veja nossos cases</a>
          </li>
        </ul>
      </div>
      <hr className="mt-10 opacity-50 " />

      <div className="footer-social-medias py-6 gap-5 flex flex-col lg:flex-row items-center justify-between">
        <Link to={"/"} className="logo-with-name">
          <img src={logo}></img>
          <h1 className="text-2xl">Eleven Jr</h1>
        </Link>

        <div className="social-medias gap-2">
          <Link
            className="media-icon mr-2"
            to={"https://www.instagram.com/elevenjr/"}
          >
            <IoLogoInstagram />
          </Link>
          <Link
            className="media-icon mr-2"
            to={"https://www.facebook.com/elevenjunior"}
          >
            <IoLogoFacebook />
          </Link>
          <Link
            className="media-icon mr-2"
            to={
              "https://www.linkedin.com/company/eleven-jr?originalSubdomain=br"
            }
          >
            <IoLogoLinkedin />
          </Link>
          <Link className="media-icon" to={"https://twitter.com/elevenjr_"}>
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
      <h2 className="sm:text-[1rem] text-muted-subtext text-center mt-5 text-[0.875rem]">
        © 2017-{new Date().getFullYear()} Eleven Consultoria Jr. Todos os
        direitos reservados.
      </h2>
    </footer>
  );
}
