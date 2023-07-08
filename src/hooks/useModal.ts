import { useCallback, useState } from 'react';

export const useModal = (defaultState = false) => {
  const [open, setOpen] = useState(defaultState);

  const onOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  const onToggleModal = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return [open, onOpenModal, onCloseModal, setOpen, onToggleModal] as const;
};
