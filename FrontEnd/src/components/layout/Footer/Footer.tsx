import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6"; //Ainda não tem o logo X no Io5
import logo from '../../../assets/images/eleven-logo.svg';

import { Link } from "react-router-dom";

import '../../../assets/css/footer/footer.css';

export default function Footer() {
  return (
	<footer className="text-white p-10 pb-5 bg-footer-background">
    <div className="flex flex-wrap text-muted-foreground">
      <ul className="min-w-50 m-2.5 flex-auto">
        <h1 className="text-white mb-2.5">Fale conosco</h1>
        <li><Link to={"https://wa.me/5521975922237"}>+55 (21) 97592-2237</Link></li>
        <li><Link to={"ElevenJr.com.br"}>ElevenJr.com.br</Link></li>
        <li><Link to={"mailto:vendas.elevenjr@gmail.com"}>vendas.elevenjr@gmail.com</Link></li>
      </ul>

      <ul className="min-w-50 m-2.5 flex-auto">
        <h1 className="text-white mb-2.5">Materiais Gratuitos</h1>
        <li><Link to={"https://app.pipefy.com/public/form/jF1D6Crr"}>Guia para emissão de passaporte</Link></li> {/*TODO: Add link*/}
        <li><Link to={"https://app.pipefy.com/public/form/WC4mdOH9"}>Guia de Sobrevivência em João Pessoa</Link></li> {/*TODO: Add link*/}
        <li><Link to={"https://app.pipefy.com/public/form/FsIs4HrM"}>Manual de Exportação</Link></li> {/*TODO: Add link*/}
      </ul>

      <ul className="min-w-50 m-2.5 flex-auto">
        <h1 className="text-white mb-2.5">Nossa localização</h1>
        <li><Link to={"https://maps.app.goo.gl/z9Qb3vLRjimrj7M36"}>Rua Horácio Trajano de Oliveira<br/> João Pessoa - PB 58071-470, BR</Link></li>
      </ul>

      <ul className="min-w-50 m-2.5 flex-auto">
        <h1 className="text-white mb-2.5">Parceiros</h1>
        <li><Link to={"https://elevenjr.com/parceiros"}>Venha ser um Parceiro</Link></li>
      </ul>

      <ul className="min-w-50 m-2.5 flex-auto">
        <h1 className="text-white mb-2.5">Blog</h1>
        <li><Link to={"https://elevenjr.com/blog"}>Conheça nosso Blog</Link></li>
      </ul>
    </div>
    
    <hr className="mt-10 opacity-50" />

    <div className="footer-social-medias">
      <Link to={"/"} className="logo-with-name">
        <img src={logo}></img><h1>Eleven Jr</h1>
      </Link>
      <div className="social-medias">
        <Link className="media-icon mr-2" to={"https://www.instagram.com/elevenjr/"}><IoLogoInstagram/></Link>
        <Link className="media-icon mr-2" to={"https://www.facebook.com/elevenjunior"}><IoLogoFacebook/></Link>
        <Link className="media-icon mr-2" to={"https://www.linkedin.com/company/eleven-jr?originalSubdomain=br"}><IoLogoLinkedin/></Link>
        <Link className="media-icon" to={"https://twitter.com/elevenjr_"}><FaSquareXTwitter/></Link>
      </div>

    </div>

    <h2 className="text-muted-foreground text-center mt-5">
      © 2017-2025 Eleven Consultoria Jr. Todos os direitos reservados.
    </h2>
  </footer>
  )
}