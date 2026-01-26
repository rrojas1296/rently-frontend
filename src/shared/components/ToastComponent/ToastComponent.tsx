import { useToast } from "@/shared/store/useToast";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "rently-components";

const ToastComponent = () => {
  const { description, type, title, open, setOpen } = useToast();
  return (
    <>
      <Toast toastType={type} open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </Toast>
      <ToastViewport />
    </>
  );
};

export default ToastComponent;
