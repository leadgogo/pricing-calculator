import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue } from 'src/features/companies/companiesSlice';
import type { RootState } from 'src/store/types';

export const useCompaniesData = () => {
  const dispatch = useDispatch();
  const companiesState = useSelector((state: RootState) => state.companies);
  const { totalLocations, hoursOpenPerDay, workingDaysPerWeek } = companiesState;

  const onSectionValueChange = useCallback(({ value, field }: { value: string; field: string }) => {
    dispatch(setFieldValue({ value, field }));
  }, []);

  return {
    companiesState,
    totalLocations,
    hoursOpenPerDay,
    workingDaysPerWeek,
    onSectionValueChange,
  };
};
