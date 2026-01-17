import { Input, Select, Switch } from "rently-components";
import type { FormFieldOption, FormFieldType } from "../../types/formField";
import type { ComponentProps } from "react";
import { Controller, type Control } from "react-hook-form";
import { DatePicker } from "rently-components";

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
              <Select
                onChange={field.onChange}
                value={field.value ?? ""}
                options={options ?? []}
                placeholder={placeholder ?? ""}
                error={error}
              />
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
    <div className="flex flex-col gap-2">
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
