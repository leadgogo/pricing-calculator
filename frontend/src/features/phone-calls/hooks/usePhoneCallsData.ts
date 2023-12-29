import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, setSelectedCallMinutesPackage } from 'src/features/phone-calls/call-minutes-slice';
import type { RootState } from 'src/store/types';

export const usePhoneCallsData = () => {
  const dispatch = useDispatch();
  const phoneCallsState = useSelector((state: RootState) => state.callMinutes);
  const { callsPerHourAmount, callDurationInMinutes, callMinutePackages, selectedCallMinutesPackage } = phoneCallsState;

  const totalMinutesNeeded = (callsPerHourAmount || 0) * callDurationInMinutes || 0;

  const onSectionValueChange = useCallback(({ value, field }: { value: string; field: string }) => {
    dispatch(setFieldValue({ value, field }));
  }, []);

  const doSetSelectedCallMinutesPackage = useCallback((value: string) => {
    dispatch(setSelectedCallMinutesPackage(value));
  }, []);

  return {
    phoneCallsState,
    totalMinutesNeeded,
    callMinutePackages,
    selectedCallMinutesPackage,
    onSectionValueChange,
    doSetSelectedCallMinutesPackage,
  };
};
