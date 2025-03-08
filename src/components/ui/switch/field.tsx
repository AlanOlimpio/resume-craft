import { Controller, useFormContext } from "react-hook-form";
import { Switch } from ".";
type InputFieldProps = {
  name: string;
  className?: string;
};

export function SwitchField({ name, className, ...props }: InputFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Switch
          {...props}
          checked={field.value}
          onCheckedChange={field.onChange}
          className={className}
        />
      )}
    />
  );
}
