import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsWhatsappActivated, setTotalPhonenumbers } from 'src/features/whatsapp/whatsapp-slice';
import type { RootState } from 'src/store';

export const useWhatsappData = () => {
  const dispatch = useDispatch();
  const { isWhatsappActivated, totalPhoneNumbers } = useSelector((state: RootState) => state.whatsapp);

  const doSetIsWhatsappActivated = useCallback((value: boolean) => {
    dispatch(setIsWhatsappActivated(value));
  }, []);

  const doSetTotalPhonenumbers = useCallback((value: string) => {
    dispatch(setTotalPhonenumbers(value));
  }, []);

  return { isWhatsappActivated, totalPhoneNumbers, doSetIsWhatsappActivated, doSetTotalPhonenumbers };
};
