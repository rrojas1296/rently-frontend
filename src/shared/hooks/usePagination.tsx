import useGetProperties from "@/modules/properties/hooks/useGetProperties";
import type { PropertyFilters } from "@/modules/properties/types/Filters.interface";
import { useEffect, useMemo, useState } from "react";

interface Props {
  debounceSearch: string;
}

function useProperties({ debounceSearch }: Props) {
  const [filters, setFilters] = useState<PropertyFilters>({
    status: "all",
    rooms: "all",
    bathrooms: "all",
    currency: "all",
    price: "",
  });

  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetProperties();
  const limit = 12;

  const filteredProperties = useMemo(() => {
    return (data?.properties || []).filter((property) => {
      return (
        property.name.toLowerCase().includes(debounceSearch.toLowerCase()) &&
        (property.status === filters.status || filters.status === "all") &&
        (property.rooms.toString() === filters.rooms ||
          filters.rooms === "all") &&
        (property.bathrooms.toString() === filters.bathrooms ||
          filters.bathrooms === "all") &&
        (property.currency === filters.currency ||
          filters.currency === "all") &&
        (property.monthlyPayment >= parseInt(filters.price) ||
          filters.price === "")
      );
    });
  }, [filters, data, debounceSearch]);

  const properties = useMemo(() => {
    const offset = page * limit;
    const newData = filteredProperties.slice(offset, offset + limit);
    return newData;
  }, [filteredProperties, page]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProperties.length / limit);
  }, [filteredProperties]);

  useEffect(() => setPage(0), [debounceSearch]);

  return {
    properties,
    hasProperties: data?.hasProperties,
    filters,
    setFilters,
    page,
    setPage,
    totalPages,
    isFetching,
  };
}

export default useProperties;
