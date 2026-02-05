import { useQuery } from "@tanstack/react-query";
import { getTenantsService } from "../services/getTenants.service";

const useGetTenants = () => {
  return useQuery({
    queryKey: ["tenants"],
    queryFn: () => getTenantsService(),
    select: (response) => response.data,
  });
};

export default useGetTenants;
