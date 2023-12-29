import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue } from 'src/features/text-messages/text-messages-slice';
import type { RootState } from 'src/store/types';

export const useTextMessagesData = () => {
  const dispatch = useDispatch();

  const textMessagesState = useSelector((state: RootState) => state.textMessages);
  const { receivedTextsPerHour, sentTextsPerHour } = textMessagesState;

  const totalTextMessages = (receivedTextsPerHour || 0) + sentTextsPerHour || 0;

  const onSectionValueChange = useCallback(({ value, field }: { value: string; field: string }) => {
    dispatch(setFieldValue({ value, field }));
  }, []);

  return {
    textMessagesState,
    totalTextMessages,
    onSectionValueChange,
  };
};
