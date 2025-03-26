import { Control, Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import React, { ComponentProps, ReactNode } from "react";
import { FieldWrapper } from "../field-wrapper";
type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
  extraContent?: (value: string) => ReactNode;
  control?: Control<any, any>;
};

export function InputField({
  label,
  name,
  containerClassName,
  extraContent,
  control: customControl,
  ...props
}: InputFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={customControl ?? control}
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
