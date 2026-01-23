import { LoaderIcon } from "lucide-react";
import { Navigate } from "react-router";
import useSession from "../hooks/useSession";

interface Props {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: Props) => {
  const { isLoading, data, isFetching } = useSession();
  const isValid = data?.isValid || false;

  if (isLoading || isFetching)
    return (
      <div className="fixed z-999 inset-0 grid place-items-center">
        <LoaderIcon className="animate-spin w-5 h-5 text-text-1" />
      </div>
    );

  if (!isValid) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
