import { useMutation } from "@tanstack/react-query";
import { createPropertyService } from "../services/createProperty.service";
import type { CreatePropertyDto } from "../dtos/createProperty.dto";
import { useNavigate } from "react-router";
import { useToast } from "@/shared/store/useToast";

const useCreateProperty = () => {
  const navigate = useNavigate();
  const { setOpen, setContent } = useToast();
  return useMutation({
    mutationKey: ["create-property"],
    mutationFn: (data: CreatePropertyDto) => createPropertyService(data),
    onSuccess: () => {
      navigate("/properties");
    },
    onError: () => {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
        setContent({
          type: "error",
          title: "Error",
          description: "Error creating property",
        });
      }, 100);
    },
  });
};

export default useCreateProperty;
