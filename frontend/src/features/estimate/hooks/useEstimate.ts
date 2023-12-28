import { RadioChangeEvent } from 'antd';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsWhatsappActivated,
  setSelectedPlan,
  PlanTypes,
  loadEstimateFromURL,
} from 'src/features/estimate/estimate-slice';
import type { RootState } from 'src/store';

export const useEstimate = () => {
  const dispatch = useDispatch();
  const { isWhatsappActivated, selectedPlan } = useSelector((state: RootState) => state.estimate);

  const doSetIsWhatsappActivated = useCallback((value: boolean) => {
    dispatch(setIsWhatsappActivated(value));
  }, []);

  const doSetSelectedPlan = useCallback((e: RadioChangeEvent) => {
    dispatch(setSelectedPlan(e.target.value));
  }, []);

  const doLoadEstimateFromURL = useCallback((encodedData: string) => {
    try {
      // Decodes base64 to string and converts it to jason
      const storeValues: RootState = JSON.parse(atob(encodedData));
      dispatch(loadEstimateFromURL(storeValues));
    } catch (e) {
      console.error('Error parsing JSON value', e);
    }
  }, []);

  return {
    PlanTypes,
    selectedPlan,
    doSetSelectedPlan,
    isWhatsappActivated,
    doSetIsWhatsappActivated,
    doLoadEstimateFromURL,
  };
};
