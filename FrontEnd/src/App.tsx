import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Materials from "./pages/Materials";
import Cases from "./pages/Cases/Cases";
import { FullscreenLoading } from "@/components/ui/loading";
import { useLoading } from "@/hooks/useLoading";
import { useHashScroll } from "@/hooks/useHashScroll";

import '@/assets/css/basic-elements/button/button.css'
import '@/assets/css/basic-elements/search-box/search-box.css'

function App() {
  const isLoading = useLoading();

  if (isLoading) {
    return <FullscreenLoading />;
  }

  return (
    <BrowserRouter>
      <HashScrollHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Solucoes" element={<Solutions />} />
        <Route path="/Materiais" element={<Materials />} />
        <Route path="/Cases" element={<Cases />} />
      </Routes>
    </BrowserRouter>
  );
}

function HashScrollHandler() {
  useHashScroll();
  return null;
}

export default App;
