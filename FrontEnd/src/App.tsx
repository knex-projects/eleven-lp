import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import { FullscreenLoading } from "@/components/ui/loading";
import { useLoading } from "@/hooks/useLoading";

function App() {
  const isLoading = useLoading();

  if (isLoading) {
    return <FullscreenLoading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sobre" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App