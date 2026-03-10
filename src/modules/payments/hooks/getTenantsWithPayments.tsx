import { useQuery } from "@tanstack/react-query";
import { getTenantsWithPaymentsService } from "../services/getTenantsWithPayments.service";

const useGetTenantsWithPayments = () => {
  return useQuery({
    queryKey: ["tenantsWithPayments"],
    queryFn: () => getTenantsWithPaymentsService(),
    select: (response) => response.data,
  });
};

export default useGetTenantsWithPayments;
