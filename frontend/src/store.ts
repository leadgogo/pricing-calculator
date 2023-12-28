import { configureStore } from '@reduxjs/toolkit';

import { estimateSlice } from 'src/features/estimate/estimate-slice';
import { whatsAppSlice } from 'src/features/whatsapp/whatsapp-slice';
import { companiesSlice } from 'src/features/companies/companiesSlice';
import { contactsSlice } from 'src/features/contacts/contacts-slice';
import { phoneNumbersSlice } from 'src/features/phone-numbers/phone-numbers-slice';
import { textMessagesSlice } from 'src/features/text-messages/text-messages-slice';
import { callMinutesSlice } from 'src/features/phone-calls/call-minutes-slice';

export const store = configureStore({
  reducer: {
    estimate: estimateSlice.reducer,
    whatsapp: whatsAppSlice.reducer,
    companies: companiesSlice.reducer,
    contacts: contactsSlice.reducer,
    phoneNumbers: phoneNumbersSlice.reducer,
    textMessages: textMessagesSlice.reducer,
    callMinutes: callMinutesSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
