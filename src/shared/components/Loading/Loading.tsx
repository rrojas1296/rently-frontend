import { cn } from "@/shared/utils/cn";
import { LoaderIcon } from "lucide-react";

interface Props {
  className?: string;
}

const Loading = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "fixed z-999 top-0 left-0 w-full h-full backdrop-blur-xs bg-overlay inset-0 grid place-items-center",
        className,
      )}
    >
      <LoaderIcon className="animate-spin w-5 h-5 text-text-1" />
    </div>
  );
};

export default Loading;
