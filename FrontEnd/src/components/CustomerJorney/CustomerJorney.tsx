import numberOne from "../../assets/images/1.svg";
import numberTwo from "../../assets/images/2.svg";
import numberThree from "../../assets/images/3.svg";

export default function CustomerJorney() {
  return (
    <section className="w-full h-auto bg-[#131737] text-white flex justify-center items-center display flex-col px-6 py-56">
      
      
      
      <h1 className="text-5xl font-bold text-center">Jornada do Cliente</h1>
      <p className="text-2xl py-2 text-center text-[#CFCFCF]">Entenda como funciona nosso processo</p>
      <div className="text-2xl flex flex-row display justify-between items-center w-[80%] text-justify gap-12 pt-12 text max-lg:flex-col max-lg:gap-16 ">
        
        <div className="flex flex-col items-center">
          <img className="mb-8" src={numberOne}/>
          <h1 className="text-4xl font-medium mb-8 text-center">
            Envio do formulário
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
            ante, alquam vel accumsan ac, ultricies quis turpis. Etiam iaculis
            vel neque vitae aliquam. Curabitur tincidunt ligula sit amet
            turpisfacilisismolestie. Vestibulum id justo tellus.{" "}
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <img className="mb-8" src={numberTwo} />
          <h1 className="text-4xl font-medium mb-8 text-center">
            Contato com o cliente
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
            ante, alquam vel accumsan ac, ultricies quis turpis. Etiam iaculis
            vel neque vitae aliquam. Curabitur tincidunt ligula sit amet
            turpisfacilisismolestie. Vestibulum id justo tellus.{" "}
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <img className="mb-8" src={numberThree} />
          <h1 className="text-4xl font-medium mb-8 text-center">
            Entrega ao cliente
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
            ante, alquam vel accumsan ac, ultricies quis turpis. Etiam iaculis
            vel neque vitae aliquam. Curabitur tincidunt ligula sit amet
            turpisfacilisismolestie. Vestibulum id justo tellus.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
