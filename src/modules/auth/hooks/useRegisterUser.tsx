import { useMutation } from "@tanstack/react-query";
import type { CreateUserDto } from "../dtos/createUser.dto";
import { registerUserService } from "../services/registerUser.service";
import { useNavigate } from "react-router";

const useRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["register-user"],
    mutationFn: (data: CreateUserDto) => registerUserService(data),
    onSuccess: () => {
      navigate("/dashboard");
    },
  });
};

export default useRegisterUser;
