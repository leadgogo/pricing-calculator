import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFieldValue,
  EXESS_SMS_COST,
  SMS_BRAND_REGISTRATION_COST,
  SMS_CAMPAIGN_MONTHLY_FEE,
} from 'src/features/text-messages/text-messages-slice';
import type { RootState } from 'src/store/types';

export const useTextMessagesData = () => {
  const dispatch = useDispatch();

  const textMessagesState = useSelector((state: RootState) => state.textMessages);
  const { totalLocations, workingDaysPerWeek, hoursOpenPerDay } = useSelector((state: RootState) => state.companies);
  const { receivedTextsPerHour, sentTextsPerHour } = textMessagesState;

  // (localidades) * (días de operación) x (4semanas del mes) x (horas de operación) x [(textos recibidos por hora) + (textos enviados por hora)]
  const totalTextMessages =
    totalLocations * workingDaysPerWeek * 4 * hoursOpenPerDay * (receivedTextsPerHour + sentTextsPerHour);

  const onSectionValueChange = useCallback(({ value, field }: { value: string; field: string }) => {
    dispatch(setFieldValue({ value, field }));
  }, []);

  return {
    textMessagesState,
    totalTextMessages,
    onSectionValueChange,
    EXESS_SMS_COST,
    SMS_BRAND_REGISTRATION_COST,
    SMS_CAMPAIGN_MONTHLY_FEE,
  };
};
