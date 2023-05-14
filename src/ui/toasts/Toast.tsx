import { useCallback, useEffect } from "react";
import { useToastContext } from "../../context";
import { ToastPosition } from "../../utils";
import styles from "./Toast.module.css";

interface ToastProps {
  position: ToastPosition;
}

export const Toast = ({ position }: ToastProps) => {
  const { toastList, setToastList } = useToastContext();

  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toastList.filter((e) => e.id !== id);
      setToastList(toastListItem);
    },
    [toastList, setToastList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {toastList.map((toast, i) => (
        <div
          key={i}
          className={`${styles.notification} ${styles.toast} ${
            styles[position]
          } ${styles[toast.title]}`}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className={styles.title}>{toast.title}</p>
            <p className={styles.description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
