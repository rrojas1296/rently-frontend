import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const DialogPortal = ({ children }: Props) => {
  const modalRoot = document.getElementById("dialog-root")!;
  return createPortal(children, modalRoot);
};

export default DialogPortal;
