import { estimateSlice } from 'src/features/estimate/estimate-slice';
import { whatsAppSlice } from 'src/features/whatsapp/whatsapp-slice';
import { companiesSlice } from 'src/features/companies/companiesSlice';
import { contactsSlice } from 'src/features/contacts/contacts-slice';
import { phoneNumbersSlice } from 'src/features/phone-numbers/phone-numbers-slice';
import { textMessagesSlice } from 'src/features/text-messages/text-messages-slice';
import { callMinutesSlice } from 'src/features/phone-calls/call-minutes-slice';

export const reducer = {
  estimate: estimateSlice.reducer,
  whatsapp: whatsAppSlice.reducer,
  companies: companiesSlice.reducer,
  contacts: contactsSlice.reducer,
  phoneNumbers: phoneNumbersSlice.reducer,
  textMessages: textMessagesSlice.reducer,
  callMinutes: callMinutesSlice.reducer,
};
