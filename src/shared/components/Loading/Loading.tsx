import { LoaderIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed z-999 top-0 left-0 w-full h-full backdrop-blur-xs bg-overlay inset-0 grid place-items-center">
      <LoaderIcon className="animate-spin w-5 h-5 text-text-1" />
    </div>
  );
};

export default Loading;
