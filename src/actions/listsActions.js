import { CONSTANTS } from "../actions";

export const addList = text => ({
  type: CONSTANTS.ADD_LIST,
  payload: { text },
});

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
) => ({
  type: CONSTANTS.DRAG_HAPPENED,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type,
  }
})
