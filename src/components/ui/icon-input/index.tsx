import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "../input";

export interface IconInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ref: null;
}
export function IconInput({
  onChange,
  placeholder,
  value,
  ref,
}: IconInputProps) {
  const debouncedValue = useDebounce(value);
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
        {!!debouncedValue && (
          <img
            src={`https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/${value}.svg`}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
}
