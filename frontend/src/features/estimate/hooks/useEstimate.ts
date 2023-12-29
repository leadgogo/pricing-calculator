import { RadioChangeEvent } from 'antd';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPlan, loadEstimateFromURL, generateEstimateLink } from 'src/features/estimate/estimate-slice';
import type { RootState } from 'src/store/types';
import { PlanTypes } from 'src/store/types';

export const useEstimate = () => {
  const dispatch = useDispatch<any>();
  const { selectedPlan } = useSelector((state: RootState) => state.estimate);

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

  const generateink = useCallback(() => {
    dispatch(generateEstimateLink());
  }, []);

  return {
    PlanTypes,
    selectedPlan,
    doSetSelectedPlan,
    doLoadEstimateFromURL,
    generateink,
  };
};
