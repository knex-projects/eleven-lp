import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import { FullscreenLoading } from '@/components/ui/loading';
import { useLoading } from '@/hooks/useLoading';

function App() {
    const isLoading = useLoading();

    if (isLoading) {
        return <FullscreenLoading />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<About />} />
                <Route path="/Solucoes" element={<Solutions />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
