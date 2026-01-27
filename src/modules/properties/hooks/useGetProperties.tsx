import { useQuery } from "@tanstack/react-query";
import { getPropertiesService } from "../services/getProperties.service";

const useGetProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: () => getPropertiesService(),
    select: (response) => response.data.data,
    refetchOnWindowFocus: false,
  });
};

export default useGetProperties;
