import {
  Input,
  PhoneInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "rently-components";
import type { ComponentProps } from "react";
import { Controller, type Control } from "react-hook-form";
import { DatePicker } from "rently-components";
import { cn } from "@/shared/utils/cn";
import type { FormFieldOption, FormFieldType } from "@/shared/types/formField";

interface Props extends ComponentProps<"input"> {
  type: FormFieldType;
  label: string;
  placeholder?: string;
  options?: FormFieldOption[];
  error?: string;
  required: boolean;
  control?: Control<any>;
}

const FormField = ({
  type,
  label,
  placeholder,
  options,
  error,
  control,
  required,
  name,
  className,
  ...other
}: Props) => {
  const generateControl = () => {
    switch (type) {
      case "switch":
        return (
          <Controller
            name={name ?? ""}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onClick={() => field.onChange(!field.value)}
              />
            )}
          />
        );

      case "select":
        return (
          <Controller
            name={name ?? ""}
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  k{" "}
                  {options?.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      <span> {opt.label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        );
      case "date":
        return (
          <Controller
            name={name ?? ""}
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholder={placeholder ?? ""}
                error={error}
                date={field.value}
                setDate={field.onChange}
              />
            )}
          />
        );
      case "phone":
        return (
          <Controller
            name={name ?? ""}
            control={control}
            render={({ field }) => (
              <PhoneInput
                placeholder={placeholder ?? ""}
                className="w-full"
                error={error}
                phone={field.value ?? ""}
                setPhone={field.onChange}
              />
            )}
          />
        );
      default:
        return (
          <Input
            type={type}
            name={name ?? ""}
            className="w-full"
            placeholder={placeholder}
            error={error}
            {...other}
          />
        );
    }
  };
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p className="text-sm text-text-1 ">
        {label}
        {required && <span className="ml-px text-danger">*</span>}
      </p>
      {generateControl()}
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
};

export default FormField;
