import { Controller, useFormContext } from "react-hook-form";
import { IconInput } from ".";
import { FieldWrapper } from "../field-wrapper";
type IconFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
};

export function IconField({
  label,
  name,
  containerClassName,
  ...props
}: IconFieldProps) {
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
        >
          <IconInput {...props} {...field} />
        </FieldWrapper>
      )}
    />
  );
}
