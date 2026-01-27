import { useMutation } from "@tanstack/react-query";
import { logoutService } from "../services/logout.service";
import { useNavigate } from "react-router";
import { useLoading } from "@/shared/store/useLoading";
import { useQueryClient } from "@tanstack/react-query";

const useLogout = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logoutService(),
    onSuccess: () => {
      setLoading(false);
      queryClient.clear();
      navigate("/login");
    },
    onMutate: () => {
      setLoading(true);
    },
  });
};

export default useLogout;
