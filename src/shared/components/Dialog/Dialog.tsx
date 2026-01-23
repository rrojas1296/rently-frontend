import DialogPortal from "../DialogPortal/DialogPortal";

type Props = {
  children: React.ReactNode;
};

const Dialog = ({ children }: Props) => {
  return (
    <DialogPortal>
      <div className="fixed top-0 left-0 bg-overlay z-50 h-screen w-screen inset-0" />
      <div className="fixed z-50 text-text-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg bg-bg-2 border border-border-2">
        {children}
      </div>
    </DialogPortal>
  );
};

export default Dialog;
