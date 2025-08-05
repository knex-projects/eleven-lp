import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { useCounterStore } from './store/use-counter-store.ts';

// Usando o 'subscribe' para ouvir mudanças de estado fora de componentes. Bom para analytics ou localStorage
const _unsubscribe = useCounterStore.subscribe((state) =>
    console.log('O contador mudou para: ', state.count)
);

// Para acessar o estado fora de um componente, você pode usar getState()
console.log('Estado inicial do contador:', useCounterStore.getState().count);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
