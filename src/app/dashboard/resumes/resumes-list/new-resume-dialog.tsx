"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogPros, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input";

import React from "react";
import { useForm, Resolver, FormProvider } from "react-hook-form";

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

  function onSubmit(data: FormData) {
    console.log(data);
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
