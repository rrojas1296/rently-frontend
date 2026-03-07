import { useToast } from "@/shared/store/useToast";
import { Toast, ToastTitle, ToastViewport } from "rently-components";

const ToastComponent = () => {
  const { type, title, open, setOpen } = useToast();
  return (
    <>
      <Toast
        className="py-3 px-5 w-xs z-50"
        toastType={type}
        open={open}
        onOpenChange={setOpen}
      >
        <ToastTitle>{title}</ToastTitle>
      </Toast>
      <ToastViewport />
    </>
  );
};

export default ToastComponent;
