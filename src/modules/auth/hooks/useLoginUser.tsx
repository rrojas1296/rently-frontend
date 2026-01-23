import { useMutation } from "@tanstack/react-query";
import { loginUserService } from "../services/loginUser.service";
import type { LoginUserDto } from "../dtos/loginUser.dto";
import { useNavigate } from "react-router";

const useLoginUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login-user"],
    mutationFn: (data: LoginUserDto) => loginUserService(data),
    onSuccess: () => {
      console.log("Here");
      navigate("/dashboard", { replace: true });
    },
  });
};

export default useLoginUser;
