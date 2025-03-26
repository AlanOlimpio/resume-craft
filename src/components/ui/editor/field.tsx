import { Control, Controller, useFormContext } from "react-hook-form";
import { Editor } from ".";
import { FieldWrapper } from "../field-wrapper";
type EditorFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
  className?: string;
  control?: Control<any, any>;
};

export function EditorField({
  label,
  name,
  containerClassName,
  control: customControl,
  ...props
}: EditorFieldProps) {
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
          <Editor {...props} {...field} ref={null} />
        </FieldWrapper>
      )}
    />
  );
}
