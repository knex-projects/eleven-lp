import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logos/eleven-logo.svg';

type HeaderProps = {
    page: string;
};

export default function Header({ page }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="z-[1] w-screen backdrop-blur-lg bg-background-muted fixed top-0 grid justify-items-center content-center max-md:h-[104px] ">
            <Link to={'/'}>
                <img
                    src={logo}
                    className="w-[100px] p-1 max-[760px]:w-[72px] max-[760px]:h-[72px] cursor-pointer max-md:col-span-2 max-lg:w-[70px]"
                    alt="Logo"
                />
            </Link>

            <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <PopoverTrigger
                    className="absolute top-[28px] right-6 min-md:hidden"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? (
                        <IoCloseSharp className="text-primary-text" size={48} />
                    ) : (
                        <IoMenuSharp className="text-primary-text" size={48} />
                    )}
                </PopoverTrigger>
                <PopoverContent className="w-[100vw] min-[761px]:hidden backdrop-blur-lg bg-[#6C6C6C40] border-b-[1px] border-t-[1px] border-background-muted border-l-0 border-r-0 rounded-none text-primary-text text-center grid text-[24px] p-0">
                    <nav>
                        <h1 className="border-b-[1px] h-[52px] content-center border-background-muted">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                        </h1>
                        <h1 className="border-b-[1px] h-[52px] content-center border-background-muted">
                            <Link
                                to="/Sobre"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sobre nós
                            </Link>
                        </h1>
                        <h1 className="border-b-[1px] h-[52px] content-center border-background-muted">
                            <Link
                                to="/Solucoes"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Soluções
                            </Link>
                        </h1>
                        <h1 className="border-b-[1px] h-[52px] content-center border-background-muted">
                            <Link
                                to="/Materiais"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Materiais gratuitos
                            </Link>
                        </h1>
                        <h1 className="border-b-[1px] h-[52px] content-center border-background-muted">
                            <Link
                                to="/Cases"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Cases
                            </Link>
                        </h1>
                        <h1 className="border-b-[1px] h-[52px] content-center border-background-muted">
                            <Link
                                to="/Blog"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                        </h1>
                    </nav>
                </PopoverContent>
            </Popover>

            <nav>
                <div className="border-b-[1px] border-t-[1px] border-background-muted w-screen h-[46px] justify-center items-center flex gap-13 text-primary-text text-[24px] font-normal max-[644px]:absolute max-[760px]:hidden max-[1000px]:text-[2.5vw] max-[1000px]:gap-10">
                    <h1 className="group">
                        <Link to="/">Home</Link>
                        <div
                            className={`h-[2px] w-[0%] bg-blue-400 ${
                                page === 'home'
                                    ? 'w-[100%]'
                                    : 'animate-[growRightToLeft_1s_ease-in-out_alternate] group-hover:animate-[growLeftToRight_1s_ease-in_forwards]'
                            } group-hover:bg-white`}
                        ></div>
                    </h1>
                    <h1 className="group">
                        <Link to="/Sobre">Sobre nós</Link>
                        <div
                            className={`h-[2px] w-[0%] bg-blue-400 ${
                                page === 'about-us'
                                    ? 'w-[100%]'
                                    : 'animate-[growRightToLeft_0.3s_ease-in-out_alternate] group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]'
                            } group-hover:bg-white`}
                        ></div>
                    </h1>
                    <h1 className="group">
                        <Link to="/Solucoes">Soluções</Link>
                        <div
                            className={`h-[2px] w-[0%] bg-blue-400 ${
                                page === 'solucoes'
                                    ? 'w-[100%]'
                                    : 'animate-[growRightToLeft_0.3s_ease-in-out_alternate] group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]'
                            } group-hover:bg-white`}
                        ></div>
                    </h1>
                    <h1 className="group">
                        <Link to="/Materiais">Materiais gratuitos</Link>
                        <div
                            className={`h-[2px] w-[0%] bg-blue-400 ${
                                page === 'Materiais'
                                    ? 'w-[100%]'
                                    : 'animate-[growRightToLeft_0.3s_ease-in-out_alternate] group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]'
                            } group-hover:bg-white`}
                        ></div>
                    </h1>
                    <h1 className="group">
                        <Link to="/Cases">Cases</Link>
                        <div
                            className={`h-[2px] w-[0%] bg-blue-400 ${
                                page === 'Cases'
                                    ? 'w-[100%]'
                                    : 'animate-[growRightToLeft_0.3s_ease-in-out_alternate] group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]'
                            } group-hover:bg-white`}
                        ></div>
                    </h1>
                    <h1 className="group">
                        <Link to="/Blog">Blog</Link>
                        <div
                            className={`h-[2px] w-[0%] bg-blue-400 ${
                                page === 'Blog'
                                    ? 'w-[100%]'
                                    : 'animate-[growRightToLeft_0.3s_ease-in-out_alternate] group-hover:animate-[growLeftToRight_0.3s_ease-in_forwards]'
                            } group-hover:bg-white`}
                        ></div>
                    </h1>
                </div>
            </nav>
        </section>
    );
}
