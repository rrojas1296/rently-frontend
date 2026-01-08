import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva(
  "rounded-lg text-sm gap-2 flex items-center justify-center cursor-pointer h-10 px-3",
  {
    variants: {
      variant: {
        ghost: "hover:bg-bg-2 transition-[background-color]",
        icon: "h-10 w-10 p-0 text-text-1 bg-bg-2 hover:bg-bg-2/70",
      },
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

const Button = ({ variant, className, children, ...other }: ButtonProps) => {
  return (
    <button className={cn(variants({ variant, className }))} {...other}>
      {children}
    </button>
  );
};

export default Button;
