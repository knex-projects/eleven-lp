import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/eleven-logo.svg";
import "@/assets/css/footer/footer.css";

export default function Footer() {
  return (
    <footer className="text-primary-text lg:px-[8.8%] max-sm:px-[6%] max-sm:pt-16 px-12 pt-24 bg-footer-background h-full">
      <div className="py-8 flex flex-wrap gap-16 gap-y-12 lg:justify-center ">
        <div className="*:block">
          <h1 className="text-primary-text font-bold mb-4">Fale Conosco</h1>
          <div className="*:block text-[#898989] text-lg">
            <Link target="_blank" to={"https://wa.me/5583991074221"}>
              +55 (83) 99107-4221
            </Link>
            <Link target="_blank" to={"mailto:contact.elevenjr@gmail.com"}>
              contact.elevenjr@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-primary-text font-bold mb-4">
            Materiais Gratuitos
          </h1>
          <div className="*:block text-[#898989]">
            <Link  to="/Materiais#Material">
              Manual do Congressista
            </Link>
            <Link to="/Materiais#Material">
              Capacitação de Linkedin
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-primary-text font-bold mb-4">
            Nossa Localização
          </h1>
          <div className="*:block text-[#898989]">
            <Link
              target="_blank"
              to={"https://maps.app.goo.gl/z9Qb3vLRjimrj7M36"}
            >
              Rua Horácio Trajano de Oliveira
              <br /> João Pessoa - PB 58071-470, BR
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-primary-text font-bold mb-4">Parceiros</h1>
          <div className="*:block text-[#898989]">
            <Link to="/#Form">Venha ser um Parceiro</Link>
          </div>
        </div>
        <div>
          <h1 className="text-primary-text font-bold mb-4">Cases</h1>
          <div className="*:block text-[#898989]">
            <Link to="/Cases#Cases">Veja nossos cases</Link>
          </div>
        </div>
      </div>

      <hr className="mt-10 opacity-10 " />

      <div className="footer-social-medias py-12 gap-5 flex flex-col lg:flex-row items-center justify-between">
        <Link to={"/"} className="logo-with-name">
          <img src={logo}></img>
          <h1 className="text-2xl">Eleven Jr</h1>
        </Link>

        <div className="social-medias gap-2">
          <Link
            target="_blank"
            className="media-icon mr-2"
            to={"https://www.instagram.com/elevenjr/"}
          >
            <IoLogoInstagram />
          </Link>
          <Link
            target="_blank"
            className="media-icon mr-2"
            to={"https://www.facebook.com/elevenjunior"}
          >
            <IoLogoFacebook />
          </Link>
          <Link
            target="_blank"
            className="media-icon mr-2"
            to={
              "https://www.linkedin.com/company/eleven-jr?originalSubdomain=br"
            }
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            target="_blank" 
          className="media-icon" to={"https://twitter.com/elevenjr_"}>
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
