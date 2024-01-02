import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalContacts, EXESS_PLAN_MONTHLY_ACTIVE_CONTACT_BLOCK_FEE } from 'src/features/contacts/contacts-slice';
import type { RootState } from 'src/store/types';

export const useContacts = () => {
  const dispatch = useDispatch();
  const { totalContacts } = useSelector((state: RootState) => state.contacts);
  const selectedPlan = useSelector((state: RootState) => state.estimate.selectedPlan);

  const doSetTotalContacts = useCallback((value: string | number) => {
    dispatch(setTotalContacts(String(value)));
  }, []);

  const extraContactsBlockFee = EXESS_PLAN_MONTHLY_ACTIVE_CONTACT_BLOCK_FEE[selectedPlan];

  return { totalContacts, doSetTotalContacts, extraContactsBlockFee };
};
