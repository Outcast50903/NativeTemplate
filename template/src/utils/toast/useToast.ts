import { useContext } from "react";

import { ToastContext } from "./toast.provider";
import { ToastContextData } from "./types";

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
}