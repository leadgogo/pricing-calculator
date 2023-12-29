export interface CompaniesState {
  totalLocations: number;
  workingDaysPerWeek: number;
  hoursOpenPerDay: number;
}

export interface ContactsState {
  totalContacts: number;
}

export enum PlanTypes {
  Professional = 'PROFESSIONAL',
  Essential = 'ESSENTIAL',
  Premium = 'PREMIUM',
}

export interface EstimateState {
  selectedPlan: PlanTypes;
}

export interface PhoneCallState {
  callsPerHourAmount: number;
  callDurationInMinutes: number;
  selectedCallMinutesPackage: string;
  callMinutePackages: {
    quantity: string;
    pricePerUnit: string;
    amount: string;
  }[];
}

export interface PhoneNumbersState {
  agentPhoneNumbersAmount: number;
  extraPhoneNumbersAmount: number;
  campaignPhoneNumbersAmount: number;
}

export interface TextMessagesState {
  receivedTextsPerHour: number;
  sentTextsPerHour: number;
}

export interface WhatsappState {
  isWhatsappActivated: boolean;
  totalPhoneNumbers: number;
}

export type RootState = {
  companies: CompaniesState;
  contacts: ContactsState;
  estimate: EstimateState;
  phoneNumbers: PhoneNumbersState;
  callMinutes: PhoneCallState;
  textMessages: TextMessagesState;
  whatsapp: WhatsappState;
};
