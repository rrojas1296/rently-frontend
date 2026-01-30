import { Navigate } from "react-router";
import useSession from "../hooks/useSession";
import Loading from "../components/Loading/Loading";

interface Props {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: Props) => {
  const { isLoading, data, isFetching } = useSession();
  const isValid = data?.isValid || false;

  if (isLoading || isFetching) return <Loading />;

  if (!isValid) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
