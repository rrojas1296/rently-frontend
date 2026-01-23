import { cn } from "@/shared/utils/cn";

interface Props {
  children?: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "py-6 bg-bg-1 px-4 rounded-xl border border-border-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
