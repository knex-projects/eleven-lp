import { IoSearch, IoArrowBackSharp, IoArrowForwardSharp, IoClose } from "react-icons/io5";
import { useState, useMemo, useEffect } from "react";

import { Button } from "@/components/ui/button";

import ManualCongressista from "@/assets/images/backgrounds/material-cards/manual_congressista.png";
import CapacitacaoLinkedin from "@/assets/images/backgrounds/material-cards/capacitacao_linkedin.png";

type CardInfoProps = {
  image: string;
  name: string;
  description: string;
  download: string;
}

function FreeMaterialCard({ image, name, description, download }: CardInfoProps) {
  const handleClick = () => {
    window.open(download, '_blank');
  }

  return(
    <div id="Material" className="scroll-mt-20 w-full h-[420px] p-[15px] rounded-[14px] bg-background">
      <div className="w-full h-[220px] bg-cover bg-center rounded-[7px]" style={{ backgroundImage: `url(${image})`}}></div>
      <div className="h-[125px]">
        <h1 className="text-dark-text w-full max-h-[50px] overflow-y-auto break-words font-bold mt-[5px]">{name}</h1>
        <p className="text-muted-subtext w-full h-[75px] mt-[5px] mb-[5px] overflow-y-auto break-words">{description}</p>
      </div>
      <Button className="!rounded-[7px] !h-[40px]" onClick={handleClick}> Download </Button>
    </div>
  )
}

const STATIC_CARDS = [
  {
    image: ManualCongressista,
    name: "Manual do congressista",
    description: "Tudo que você precisa saber para sua sobrevivência em João Pessoa",
    download: "https://drive.google.com/file/d/1tJui8Ql3RbAzue-DHrq2kJi7TeMmwKJQ/view?usp=sharing"
  },
  {
    image: CapacitacaoLinkedin,
    name: "Capacitação LinkedIn",
    description: "Qual o seu conhecimento sobre Linkedin?",
    download: "https://drive.google.com/file/d/1W6yjXi3N4TDEDdbjUAzSpkBBUyI8QEi6/view?usp=drive_link"
  },
];

function FreeMaterialsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const cardsPerPage = 9;

  const allCards = STATIC_CARDS;

  const filteredCards = useMemo(() => {
    if (!searchTerm.trim()) {
      return allCards;
    }
    
    const term = searchTerm.toLowerCase().trim();
    return allCards.filter(card => 
      card.name.toLowerCase().includes(term) ||
      card.description.toLowerCase().includes(term)
    );
  }, [allCards, searchTerm]);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  
  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return filteredCards.slice(startIndex, endIndex);
  }, [currentPage, filteredCards, cardsPerPage]);

 useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  const clearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <section className="">
      <div className="relative w-full min-h-[870px] bg-background-muted-light text-dark-text flex justify-around">
        <div className="max-w-[1152px]">
          <div className="flex flex-col md:flex-row justify-between pt-[40px] pl-[25px] pr-[25px] items-center space-y-4 md:space-y-0">
            <h2 className="font-bold text-center md:text-left">
              {searchTerm ? `Resultados para "${searchTerm}" - ` : ""}
              Página {currentPage} de {totalPages}
              {searchTerm && ` (${filteredCards.length} resultado${filteredCards.length !== 1 ? 's' : ''})`}
            </h2>
            <div className="bg-background p-[3px] rounded-[7px] border-[1px] border-muted-subtext-light flex items-center relative w-full md:w-auto">
              <IoSearch className="text-muted-subtext ml-2"/>
              <input 
                type="search" 
                name="materiais" 
                id="materials" 
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-2 pr-8 bg-transparent text-sidebar-primary outline-none w-full md:w-64"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 unstyled transition-all"
                >
                  <IoClose size={18} />
                </button>
              )}
            </div>
          </div>
          <hr className="border-t-1 border-muted-subtext m-2 mr-4 ml-4"/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 min-h-[600px]">
            {currentCards.length > 0 ? (
              currentCards.map((card, index) => (
                <FreeMaterialCard 
                  key={`${card.name}-${index}-${currentPage}`}
                  image={card.image}
                  name={card.name}
                  description={card.description}
                  download={card.download}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-muted-subtext text-lg">
                  {searchTerm ? `Nenhum resultado encontrado para "${searchTerm}"` : "Nenhum material disponível"}
                </p>
                {searchTerm && (
                  <Button
                    onClick={clearSearch}
                    className="w-[100px] mt-4 unstyled text-xl hover:underline"
                  >
                    Limpar pesquisa
                  </Button>
                )}
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-end space-x-4 pb-8 mr-[15px]">
              <Button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="w-[64px] h-[64px] !text-sidebar-primary items-center gap-2 !bg-background-muted"
              >
                <IoArrowBackSharp />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={currentPage === page ? "w-[64px] h-[64px] !text-dark-text items-center !bg-background" : "w-[64px] h-[64px] !text-sidebar-primary items-center !bg-background-muted"}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="w-[64px] h-[64px] !text-sidebar-primary items-center gap-2 !bg-background-muted"
              >
                <IoArrowForwardSharp />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FreeMaterialsSection;