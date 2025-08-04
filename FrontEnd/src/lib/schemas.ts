import { z } from 'zod';

export const contactFormSchema = z.object({
    enterpriseName: z.string().min(3, {
        message: 'O nome da empresa precisa ter no mínimo 3 caracteres.',
    }),

    representativeName: z.string().min(3, {
        message: 'O nome do representante precisa ter no mínimo 3 caracteres.',
    }),

    email: z.email({ message: 'Por favor, insira um e-mail válido.' }),

    phoneNumber: z.e164({
        message: 'Por favor, insira um número de telefone válido',
    }),

    description: z.string({
        message: 'Por favor, insira a descrição da sua mensagem',
    }),
});
