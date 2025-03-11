import { Controller, useFormContext } from "react-hook-form";
import { Slider } from ".";
import { FieldWrapper } from "../field-wrapper";
type SliderFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
};

export function SliderField({
  name,
  containerClassName,
  label,
  required,
}: SliderFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={1}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState?.error}
        >
          <div className="flex items-center gap-4">
            <Slider
              step={1}
              defaultValue={[1]}
              min={0}
              max={5}
              value={[field.value]}
              className={containerClassName}
              onValueChange={(value) => field.onChange(value[0])}
            />
            <p className="font-bold">
              {field.value === 0 ? "Oculto" : field.value}
            </p>
          </div>
        </FieldWrapper>
      )}
    />
  );
}
