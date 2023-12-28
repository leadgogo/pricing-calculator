import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue } from 'src/features/phone-numbers/phone-numbers-slice';
import type { RootState } from 'src/store';

export const usePhoneNumbersData = () => {
  const dispatch = useDispatch();
  const phoneNumbersState = useSelector((state: RootState) => state.phoneNumbers);
  const { agentPhoneNumbersAmount, extraPhoneNumbersAmount, campaignPhoneNumbersAmount } = phoneNumbersState;

  const totalPhoneNumbers =
    (agentPhoneNumbersAmount || 0) + (extraPhoneNumbersAmount || 0) + campaignPhoneNumbersAmount || 0;

  const onSectionValueChange = useCallback(({ value, field }: { value: string; field: string }) => {
    dispatch(setFieldValue({ value, field }));
  }, []);

  return {
    phoneNumbersState,
    agentPhoneNumbersAmount,
    extraPhoneNumbersAmount,
    campaignPhoneNumbersAmount,
    totalPhoneNumbers,
    onSectionValueChange,
  };
};
