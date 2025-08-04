import { create } from 'zustand';

// Criação de um estado counter padrão

// Definindo a interface para o estado e as ações desse estado (adicionar, diminuir, resetar, etc)
type CounterState = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;

    incrementIfLessThan10: () => void; //
};

// Criar o hook store com o estado inicial e as ações baseadas na INTERFACE
export const useCounterStore = create<CounterState>((set, get) => ({
    // ESTADO
    count: 0, // Valor do estado inicial

    // AÇÕES
    // Ações que modificam o estado usando set - função principal para atualizar o estado
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),

    incrementIfLessThan10: () => {
        const currentCount = get().count; // Lê o estado atual usando get
        if (currentCount < 10) {
            set({ count: currentCount + 1 });
        }
    },
}));
