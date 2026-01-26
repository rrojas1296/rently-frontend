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
      <Toast
        className="shrink-0 w-10/12 max-w-none"
        toastType={type}
        open={open}
        onOpenChange={setOpen}
      >
        <ToastTitle className="mr-7">{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </Toast>
      <ToastViewport />
    </>
  );
};

export default ToastComponent;
