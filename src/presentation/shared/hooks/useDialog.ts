import { useCallback, useState } from "react";

export const useDialog = <T>() => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<T>();

  const onShow = useCallback((value: T) => {
    setSelected(value);
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setSelected(undefined);
    setOpen(false);
  }, []);

  return {
    open,
    selected,
    onClose,
    onShow,
  };
};
