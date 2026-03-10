import { useQuery } from "@tanstack/react-query";
import { getFiltersService } from "../services/getFilters.service";

const useGetPaymentsFilters = () => {
  return useQuery({
    queryKey: ["paymentsFilters"],
    queryFn: () => getFiltersService(),
    select: (response) => response.data,
  });
};

export default useGetPaymentsFilters;
