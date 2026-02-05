import { useQuery } from "@tanstack/react-query";
import { getAvailablePropertiesService } from "../services/getAvailableProperties.service";

const useGetAvailableProperties = () => {
  return useQuery({
    queryKey: ["availableProperties"],
    queryFn: () => getAvailablePropertiesService(),
    select: (response) => response.data.properties,
  });
};

export default useGetAvailableProperties;
