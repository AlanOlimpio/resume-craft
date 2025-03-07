import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./input";
import { ComponentProps } from "react";
import { FieldWrapper } from "../field-wrapper";
type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export function InputField({ label, name, ...props }: InputFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={""}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
}
