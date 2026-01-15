import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import axios from "axios";

import ElevenLogo from "@/assets/images/logos/eleven-logo-form.svg";
import ContactIcon from "@/assets/images/icons/contact-icon.svg";

const formSchema = z.object({
  empresa: z
    .string()
    .min(1, "O nome da empresa é obrigatório")
    .max(50, "O nome da empresa deve ter no máximo 50 caracteres"),

  representante: z
    .string()
    .min(1, "O nome do representantee é obrigatório")
    .max(50, "O nome do representantee deve ter no máximo 50 caracteres")
    .regex(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/,
      "O nome deve conter apenas letras"
    ),

  email: z
    .string()
    .min(1, "O email é obrigatório")
    .email("Por favor, insira um email válido")
    .max(50, "O email deve ter no máximo 50 caracteres"),

  telefone: z
    .string()
    .min(1, "O telefone é obrigatório")
    .regex(
      /^(\+\d{1,3})?[\s-]?(\(\d{2,3}\)|\d{2,3})?[\s-]?\d{4,5}[\s-]?\d{4}$/,
      "Por favor, insira um número de telefone válido"
    )
    .min(10, "O telefone deve ter pelo menos 10 dígitos")
    .max(20, "O telefone deve ter no máximo 20 caracteres"),

  mensagem: z
    .string()
    .min(1, "A mensagem é obrigatória")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres"),
});

export default function ConsultForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      empresa: "",
      representante: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://formsubmit.co/contact.elevenjr@gmail.com", 
        {
          ...data,
          _subject: "Novo contato do site Eleven",
          _template: "table",
          _captcha: "false",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Sucesso ao enviar.");
        setSubmitted(true);
        form.reset();
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="Form" className=" scroll-smooth -scroll-mt-20 w-full lg:p-24 p-6 py-16 bg-dark-background flex flex-row justify-around">
      <div className="max-w-1/2 max-h-full flex-col lg:flex hidden pr-2 gap-y-8 justify-evenly">
        <span className="flex flex-col gap-y-8">
          <h1 className="text-5xl font-bold text-subtext mb-4">
            Internacionalize sua empresa.
          </h1>
          <p className="text-primary-text text-2xl font-roboto mb-8">
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
            className="bg-[#FFFFFF] text-dark-text px-8 py-10 rounded-lg space-y-6 max-w-[512px]"
          >
            <h1 className="font-bold text-2xl text-center w-full p-0">
              Agende uma conversa!
            </h1>

            {/* Campo Empresa */}
            <FormField
              control={form.control}
              name="empresa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input className="bg-[#F0F0F0]" placeholder="Nome da sua empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo representante */}
            <FormField
              control={form.control}
              name="representante"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Representante</FormLabel>
                  <FormControl>
                    <Input className="bg-[#F0F0F0]" placeholder="Seu nome completo" {...field} />
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
                    <Input className="bg-[#F0F0F0]" placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Telefone */}
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input className="bg-[#F0F0F0]" placeholder="(00) 00000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo Mensagem */}
            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                    className="resize-none h-[82px] bg-[#F0F0F0]"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Fale com um Consultor"}
            </Button>
            <FormMessage className={submitted ? `block` : `hidden`}>
              Enviado com sucesso!
            </FormMessage>
          </form>
        </Form>
      </div>
    </section>
  );
}
