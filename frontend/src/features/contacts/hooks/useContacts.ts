import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalContacts } from 'src/features/contacts/contacts-slice';
import type { RootState } from 'src/store';

export const useContacts = () => {
  const dispatch = useDispatch();
  const { totalContacts } = useSelector((state: RootState) => state.contacts);

  const doSetTotalContacts = useCallback((value: string | number) => {
    dispatch(setTotalContacts(String(value)));
  }, []);

  return { totalContacts, doSetTotalContacts };
};
