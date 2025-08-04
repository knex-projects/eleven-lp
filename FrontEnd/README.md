# Eleven Consultoria - Landing Page

Este é o repositório do front-end para a landing page da Eleven Consultoria, desenvolvido com React, TypeScript e Vite.

## Primeiros Passos

Para rodar o projeto em ambiente de desenvolvimento, siga os passos:

1.  **Instale as dependências:**
    ```sh
    npm install
    ```
2.  **Inicie o servidor de desenvolvimento:**
    `sh
npm run dev
`

Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) para ver o resultado.

---

## Padrões de Uso e Tecnologias

### Tailwind CSS (Estilização)

Utilizamos o Tailwind CSS para estilização utilitária.

-   **Arquivo de Configuração:** As configurações globais, como cores, animações e espaçamentos, estão em [`tailwind.config.js`](FrontEnd/tailwind.config.js).
-   **CSS Principal:** As diretivas base do Tailwind e as variáveis de CSS estão em [`src/index.css`](FrontEnd/src/index.css).

### Zod (Validação de Dados)

Usamos Zod para declarar e validar esquemas de dados, garantindo que os dados de formulários e APIs estejam corretos.

-   **Local dos Esquemas:** Todos os esquemas de validação devem ser criados no diretório `src/lib/`.

**Como criar e usar um esquema:**

1.  Defina o esquema em [`src/lib/schemas.ts`](FrontEnd/src/lib/schemas.ts).

    ```typescript
    // filepath: src/lib/schemas.ts
    import { z } from 'zod';

    export const contactFormSchema = z.object({
        name: z.string().min(3, 'O nome é obrigatório.'),
        email: z.string().email('E-mail inválido.'),
    });
    ```

2.  Use `safeParse` em seus componentes ou funções para validar os dados.

    ```typescript
    import { contactFormSchema } from '../lib/schemas';

    function handleSubmit(formData) {
        const result = contactFormSchema.safeParse(formData);
        if (!result.success) {
            // Lida com os erros de validação
            console.error(result.error.flatten().fieldErrors);
        } else {
            // Dados são válidos
            console.log(result.data);
        }
    }
    ```

### Zustand (Gerenciamento de Estado)

Zustand é usado para gerenciar o estado global da aplicação de forma simples e centralizada.

-   **Local dos Stores:** Todos os stores devem ser criados no diretório [`src/store/`](FrontEnd/src/store/). Cada store deve ser focado em um domínio específico (ex: `use-contact-modal-store.ts`).

**Como criar e usar um store:**

1.  Defina o store em um novo arquivo em `src/store/`.

    ```typescript
    // filepath: src/store/use-counter-store.ts
    import { create } from 'zustand';

    type CounterState = {
        count: number;
        increment: () => void;
    };

    export const useCounterStore = create<CounterState>((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
    }));
    ```

2.  Use o hook gerado em qualquer componente para acessar o estado e as ações.

    ```tsx
    import { useCounterStore } from '../store/use-counter-store';

    function CounterComponent() {
        const { count, increment } = useCounterStore();

        return (
            <div>
                <p>Contador: {count}</p>
                <button onClick={increment}>Incrementar</button>
            </div>
        );
    }
    ```
