import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import ElevenLogo from "@/assets/images/eleven-logo-form.svg";
import ContactIcon from "@/assets/images/contact-icon.svg";

const formSchema = z.object({
  enterprise: z
    .string()
    .min(1, "O nome da empresa é obrigatório")
    .max(50, "O nome da empresa deve ter no máximo 50 caracteres"),

  representant: z
    .string()
    .min(1, "O nome do representante é obrigatório")
    .max(50, "O nome do representante deve ter no máximo 50 caracteres")
    .regex(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/,
      "O nome deve conter apenas letras"
    ),

  email: z
    .string()
    .min(1, "O email é obrigatório")
    .email("Por favor, insira um email válido")
    .max(50, "O email deve ter no máximo 50 caracteres"),

  phoneNumber: z
    .string()
    .min(1, "O telefone é obrigatório")
    .regex(
      /^(\+\d{1,3})?[\s-]?(\(\d{2,3}\)|\d{2,3})?[\s-]?\d{4,5}[\s-]?\d{4}$/,
      "Por favor, insira um número de telefone válido"
    )
    .min(10, "O telefone deve ter pelo menos 10 dígitos")
    .max(20, "O telefone deve ter no máximo 20 caracteres"),

  message: z
    .string()
    .min(1, "A mensagem é obrigatória")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres"),
});

export default function ConsultForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      enterprise: "",
      representant: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success("Formulário enviado com sucesso!", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    // Aqui você pode adicionar a lógica para enviar os dados para seu backend
    console.log("Dados do formulário:", data);
  }

  return (
    <section className="w-full lg:p-24 p-6 py-16 bg-[#0F143B] flex flex-row justify-around">
      
      {/* Lado esquerdo com texto e imagem */}
      <div className="max-w-1/2 max-h-full flex-col lg:flex hidden pr-2 gap-y-8 justify-evenly">
        <span className="flex flex-col gap-y-8">
          <h1 className="text-5xl font-bold text-[#F0F0F0] mb-4">
            Internacionalize sua empresa.
          </h1>
          <p className="text-white text-2xl font-roboto mb-8">
            Está pronto para levar seu negócio além das fronteiras? Preencha o
            formulário ao lado que expandiremos o horizonte do seu negócio.
          </p>
        </span>
        <img
          src={ContactIcon}
          alt="Contact Icon"
          className="w-full h-96 flex justify-center"
        />
      </div>

      {/* Formulário de Consulta */}
      <div className="w-full h-full max-w-[512px] lg:pl-5 pl-0">
        <img
          src={ElevenLogo}
          alt="Eleven Logo"
          className="flex justify-center w-full mx-auto mb-6 h-28"
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-white px-8 py-10 rounded-lg space-y-6 max-w-[512px]"
          >
            <h1 className="font-bold text-2xl text-center w-full p-0">
              Agende uma conversa!
            </h1>

            {/* Campo Empresa */}
            <FormField
              control={form.control}
              name="enterprise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da sua empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Representante */}
            <FormField
              control={form.control}
              name="representant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Representante</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Telefone */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(00) 00000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Mensagem */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Fale com um Consultor</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
