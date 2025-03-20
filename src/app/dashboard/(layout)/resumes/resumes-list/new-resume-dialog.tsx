"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogPros, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input/field";
import { createResume } from "@/db/actions";

import React from "react";
import { useForm, Resolver, FormProvider } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  title: string;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.title ? values : {},
    errors: !values.title
      ? {
          title: {
            type: "required",
            message: "Esse campo é obrigatório.",
          },
        }
      : {},
  };
};

export function NewResumeDialog(props: BaseDialogPros) {
  const methods = useForm<FormData>({ resolver });

  async function onSubmit(data: FormData) {
    try {
      const resume = await createResume(data.title);
      toast.success("Currículo criado com sucesso!");
      console.log(resume);
      methods.reset();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar o currículo, tente novamente.");
    }
  }

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputField label="Título" name="title" />
            <Button className="w-max mt-6 ml-auto">Criar</Button>
          </form>
        </FormProvider>
      }
    />
  );
}
