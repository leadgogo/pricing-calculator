import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFieldValue,
  setSelectedCallMinutesPackage,
  EXESS_CALL_MINUTE_COST,
} from 'src/features/phone-calls/call-minutes-slice';
import type { RootState } from 'src/store/types';

export const usePhoneCallsData = () => {
  const dispatch = useDispatch();
  const phoneCallsState = useSelector((state: RootState) => state.callMinutes);
  const { totalLocations, workingDaysPerWeek, hoursOpenPerDay } = useSelector((state: RootState) => state.companies);
  const { callsPerHourAmount, callDurationInMinutes, callMinutePackages, selectedCallMinutesPackage } = phoneCallsState;

  // (localidades) * (días de operación) x (4semanas del mes) x (horas de operación) x (total de llamadas por hora) x (minutos promedio por llamada) x (2outbound-inbound)
  const totalMinutesNeeded =
    totalLocations * workingDaysPerWeek * 4 * hoursOpenPerDay * callsPerHourAmount * callDurationInMinutes * 2;

  const onSectionValueChange = useCallback(({ value, field }: { value: string; field: string }) => {
    dispatch(setFieldValue({ value, field }));
  }, []);

  const doSetSelectedCallMinutesPackage = useCallback((value: unknown) => {
    dispatch(setSelectedCallMinutesPackage(String(value)));
  }, []);

  return {
    phoneCallsState,
    totalMinutesNeeded,
    callMinutePackages,
    selectedCallMinutesPackage,
    onSectionValueChange,
    doSetSelectedCallMinutesPackage,
    EXESS_CALL_MINUTE_COST,
  };
};
