import { CONSTANTS } from '../actions';

const initialState = [
  {
    id: 0,
    title: 'TODO',
    cards: [
      { id: 0, text: 'Create static reducer' },
      { id: 1, text: 'Mock data' },
    ],
  },
  {
    id: 1,
    title: 'In Progress',
    cards: [
      { id: 2, text: 'Figure out how Redux works' },
      { id: 3, text: 'Follow along with some projects' },
      { id: 4, text: 'Create analogies for certain concepts' },
    ],
  }
];

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        id: state.length + 1,
        title: action.payload.text,
        cards: [],
      };

      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      return state.map(list => {
        if(list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, {
              id: list.cards.length + 1,
              text: action.payload.text,
            }]
          };
        }

        return list;
      })
    case CONSTANTS.DRAG_HAPPENED:
      const newState = [...state];

      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type,
        // draggableId
      } = action.payload;

      // draggin lists around - the listOrderReducer should handle this
      if(type === "list") {
        const list  = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // dragging in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = newState.find(list => droppableIdStart === list.id.toString());
        const card = list.cards.splice(droppableIndexStart, 1);

        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // dragging in other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = newState.find(list => droppableIdStart === list.id.toString());
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = newState.find(list => droppableIdEnd === list.id.toString());
        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    default:
      return state;
  }
}

export default listsReducer;