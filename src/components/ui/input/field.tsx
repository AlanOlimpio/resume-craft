import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import React, { ComponentProps, ReactNode } from "react";
import { FieldWrapper } from "../field-wrapper";
type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
  extraContent?: (value: string) => ReactNode;
};

export function InputField({
  label,
  name,
  containerClassName,
  extraContent,
  ...props
}: InputFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={""}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState?.error}
          ref={null}
        >
          <Input {...props} {...field} />
          {extraContent && extraContent(field.value)}
        </FieldWrapper>
      )}
    />
  );
}
