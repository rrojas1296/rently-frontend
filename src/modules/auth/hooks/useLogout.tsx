import { useMutation } from "@tanstack/react-query";
import { logoutService } from "../services/logout.service";
import { useNavigate } from "react-router";
import { useLoading } from "@/shared/store/useLoading";

const useLogout = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logoutService(),
    onSuccess: () => {
      console.log("Finished");
      navigate("/login");
    },
    onMutate: () => {
      setLoading(true);
    },
  });
};

export default useLogout;
