import { Controller, useFormContext } from "react-hook-form";
import { Editor } from ".";
import { ComponentProps } from "react";
import { FieldWrapper } from "../field-wrapper";
type EditorFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
};

export function EditorField({
  label,
  name,
  containerClassName,
  ...props
}: EditorFieldProps) {
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
          <Editor {...props} {...field} ref={null} />
        </FieldWrapper>
      )}
    />
  );
}
