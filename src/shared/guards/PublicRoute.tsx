import { LoaderIcon } from "lucide-react";
import useSession from "../hooks/useSession";
import { Navigate } from "react-router";

interface Props {
  children: React.ReactNode;
}
const PublicRoute = ({ children }: Props) => {
  const { isLoading, data, isFetching } = useSession();
  const isValid = data?.isValid;

  if (isLoading || isFetching)
    return (
      <div className="fixed z-999 inset-0 grid place-items-center">
        <LoaderIcon className="animate-spin w-5 h-5 text-text-1" />
      </div>
    );
  if (isValid) return <Navigate to="/dashboard" />;
  return children;
};

export default PublicRoute;
