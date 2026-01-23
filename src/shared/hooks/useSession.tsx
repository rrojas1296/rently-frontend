import { useQuery } from "@tanstack/react-query";
import { validateSession } from "../services/validateSession";

const useSession = () => {
  return useQuery({
    queryKey: ["validate-token"],
    queryFn: () => validateSession(),
    select: (response) => response.data,
    refetchOnWindowFocus: false,
  });
};

export default useSession;
