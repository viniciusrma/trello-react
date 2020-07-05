import { CONSTANTS } from '.';

export const addCard = (listId, text) => ({
  type: CONSTANTS.ADD_CARD,
  payload: { listId, text },
});

