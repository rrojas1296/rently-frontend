import useSession from "../hooks/useSession";
import { Navigate } from "react-router";
import Loading from "../components/Loading/Loading";

interface Props {
  children: React.ReactNode;
}
const PublicRoute = ({ children }: Props) => {
  const { isLoading, data, isFetching } = useSession();
  const isValid = data?.isValid;

  if (isLoading || isFetching) return <Loading />;
  if (isValid) return <Navigate to="/dashboard" />;
  return children;
};

export default PublicRoute;
