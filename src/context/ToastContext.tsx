import React, { createContext, HTMLAttributes, useState } from "react";
import { ToastProperty, ToastType } from "../utils";

interface ToastConfigType {
  toastList: ToastProperty[];
  setToastList: React.Dispatch<React.SetStateAction<ToastProperty[]>>;
  errorMessage: (description: string) => void;
  infoMessage: (description: string) => void;
  warningMessage: (description: string) => void;
  successMessage: (description: string) => void;
}

export const ToastContext = createContext<ToastConfigType | null>(null);

export const ToastProvider = ({ children }: HTMLAttributes<{}>) => {
  const [toastList, setToastList] = useState<ToastProperty[]>([]);

  const errorMessage = (description: string) =>
    setToastList([
      ...toastList,
      {
        id: toastList.length + 1,
        title: ToastType.Error,
        description: description,
      },
    ]);
  const infoMessage = (description: string) =>
    setToastList([
      ...toastList,
      {
        id: toastList.length + 1,
        title: ToastType.Info,
        description: description,
      },
    ]);
  const warningMessage = (description: string) =>
    setToastList([
      ...toastList,
      {
        id: toastList.length + 1,
        title: ToastType.Warning,
        description: description,
      },
    ]);
  const successMessage = (description: string) =>
    setToastList([
      ...toastList,
      {
        id: toastList.length + 1,
        title: ToastType.Success,
        description: description,
      },
    ]);
  return (
    <ToastContext.Provider
      value={{
        toastList,
        setToastList,
        errorMessage,
        infoMessage,
        warningMessage,
        successMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }

  return context;
};
