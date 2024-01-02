import { RadioChangeEvent } from 'antd';
import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EXTRA_COMPANY_FEE } from 'src/features/companies/companiesSlice';
import { EXESS_PLAN_MONTHLY_ACTIVE_CONTACT_BLOCK_FEE } from 'src/features/contacts/contacts-slice';
import {
  setSelectedPlan,
  loadEstimateFromURL,
  generateEstimateLink,
  plans,
} from 'src/features/estimate/estimate-slice';
import { usePhoneCallsData } from 'src/features/phone-calls/hooks/usePhoneCallsData';
import { usePhoneNumbersData } from 'src/features/phone-numbers/hooks/usePhoneNumbersData';
import { useTextMessagesData } from 'src/features/text-messages/hooks/useTextMessagesData';
import type { RootState } from 'src/store/types';
import { PlanTypes } from 'src/store/types';

export const useEstimate = () => {
  const dispatch = useDispatch<any>();
  const { selectedPlan } = useSelector((state: RootState) => state.estimate);
  const { totalLocations } = useSelector((state: RootState) => state.companies);
  const { totalContacts } = useSelector((state: RootState) => state.contacts);
  const { isWhatsappActivated, totalPhoneNumbers: totalWhatsappNumbers } = useSelector(
    (state: RootState) => state.whatsapp
  );

  const { selectedCallMinutesPackage, callMinutePackages, totalMinutesNeeded, EXESS_CALL_MINUTE_COST } =
    usePhoneCallsData();
  const { totalPhoneNumbers, EXTRA_PHONE_NUMBER_COST } = usePhoneNumbersData();
  const { totalTextMessages, EXESS_SMS_COST } = useTextMessagesData();

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

  const selectedPlanData = plans[selectedPlan];

  const prepaidCharges = useMemo(() => {
    const callMinutesPackage =
      Number(selectedCallMinutesPackage) && callMinutePackages.find(pkg => pkg.quantity === selectedCallMinutesPackage);

    const charges: { description: string; total: string }[] = [];

    if (callMinutesPackage) {
      charges.push({
        description: `${Number(callMinutesPackage.quantity).toLocaleString()} call minutes (PR/US/CA)`,
        total: callMinutesPackage.amount,
      });
    }

    if (isWhatsappActivated && totalWhatsappNumbers) {
      charges.push({
        description: `${totalWhatsappNumbers} WhatsApp number${totalWhatsappNumbers > 1 ? 's' : ''}`,
        total: String(totalWhatsappNumbers * 50.0),
      });
    }

    return charges;
  }, [selectedCallMinutesPackage, callMinutePackages, isWhatsappActivated, totalWhatsappNumbers]);

  // Additional Charges

  // Extra Companies Charges
  const extraCompanies = totalLocations - 1;
  const additionalCompaniesFee = extraCompanies * EXTRA_COMPANY_FEE;
  const extraCompaniesCharge = additionalCompaniesFee > 0 && {
    text: `${extraCompanies} ${extraCompanies > 1 ? 'companies' : 'company'}`,
    total: additionalCompaniesFee,
  };

  // Extra Contacts Charges
  const extraContacts = (Math.ceil(totalContacts / 100) * 100 - 1000) / 100;
  const additionalContactsFee = extraContacts * EXESS_PLAN_MONTHLY_ACTIVE_CONTACT_BLOCK_FEE[selectedPlan];
  const extraContactsCharge = additionalContactsFee > 0 && {
    text: `${extraContacts} contact block${extraContacts > 1 ? 's' : ''}`,
    total: additionalContactsFee,
  };

  // Extra Phone Numbers Charges
  const extraPhoneNumbers = totalPhoneNumbers - 1;
  const additionalPhoneNumbersFee = extraPhoneNumbers * EXTRA_PHONE_NUMBER_COST;
  const extraPhoneNumberCharge = additionalPhoneNumbersFee > 0 && {
    text: `${extraPhoneNumbers} phone number${extraPhoneNumbers > 1 ? 's' : ''}`,
    total: additionalPhoneNumbersFee,
  };

  // Extra Call Minute Charges
  const extraCallMinutes = totalMinutesNeeded - Number(selectedCallMinutesPackage);
  const additionalCallMinutesFee = extraCallMinutes * EXESS_CALL_MINUTE_COST;
  const extraCallMinutesCharge = additionalCallMinutesFee > 0 && {
    text: `${extraCallMinutes} call minute${extraCallMinutes > 1 ? 's' : ''}`,
    total: additionalCallMinutesFee,
  };

  // Extra Text Message Charges
  const extraTextMessages = totalTextMessages - 100;
  const additionalTextMessagesFee = extraTextMessages * EXESS_SMS_COST;
  const extraTextMessagesCharge = additionalTextMessagesFee > 0 && {
    text: `${extraTextMessages} text message${extraTextMessages > 1 ? 's' : ''}`,
    total: additionalTextMessagesFee,
  };

  const additionalChargesArr = [
    additionalCompaniesFee,
    additionalContactsFee,
    additionalPhoneNumbersFee,
    additionalCallMinutesFee,
    additionalTextMessagesFee,
  ];
  const showAdditionalCharges = additionalChargesArr.some(fee => fee > 0);

  const totalCharges =
    Number(selectedPlanData.monthlyCost) +
    (prepaidCharges?.reduce((acc, charge) => acc + Number(charge.total), 0) || 0) +
    additionalChargesArr.reduce((acc, charge) => (charge > 0 ? charge + acc : acc), 0);

  return {
    PlanTypes,
    selectedPlan,
    selectedPlanData,
    prepaidCharges,
    showAdditionalCharges,
    extraCompaniesCharge,
    extraContactsCharge,
    extraPhoneNumberCharge,
    extraCallMinutesCharge,
    extraTextMessagesCharge,
    totalCharges,
    doSetSelectedPlan,
    doLoadEstimateFromURL,
    generateink,
  };
};
