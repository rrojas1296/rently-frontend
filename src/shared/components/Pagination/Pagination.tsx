import { cn } from "@/shared/utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "rently-components";

interface Props {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination = ({ totalPages, page, setPage }: Props) => {
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index);
  return (
    <div className="flex gap-2 justify-self-center mt-6">
      <Button
        variant="outlined"
        className={cn(
          "w-10",
          page === 0 && "pointer-events-none bg-bg-2 text-text-2",
        )}
        onClick={() => {
          if (page === 0) return;
          setPage(page - 1);
        }}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </Button>
      {pagesArray.map((p) => (
        <Button
          key={p}
          variant="outlined"
          className={cn(
            "w-10",
            page === p && "bg-primary-500 border-none hover:bg-primary-400",
          )}
          onClick={() => setPage(p)}
        >
          {p + 1}
        </Button>
      ))}
      <Button
        variant="outlined"
        className={cn(
          "w-10",
          page === totalPages - 1 && "pointer-events-none bg-bg-2 text-text-2",
        )}
        onClick={() => {
          if (page === totalPages - 1) return;
          setPage(page + 1);
        }}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Pagination;
