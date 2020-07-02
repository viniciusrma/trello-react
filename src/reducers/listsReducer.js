import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 6;

const initialState = [
  {
    title: "Episode 1",
    id: `list-${0}`,
    cards: [
      {
        id:`list-${0}`,
        text: "We created a static list and a static card"
      },
      {
        id: `list-${1}`,
        text: "We used  a mix between material UI and style components"
      }
    ]
  },
  {
    title: "Episode 2",
    id: `list-${1}`,
    cards: [
      {
        id:`list-${2}`,
        text: "We created our first reducer"
      },
      {
        id: `list-${3}`,
        text: "and rendered many cards on our list with static data"
      },
      {
        id: `list-${4}`,
        text: "we also made some little changes forgotten in the last class"
      },
      {
        id: `list-${5}`,
        text: "we also made some little changes forgotten in the last class"
      }
    ]
  }

];

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      }
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
        const newCard = {
          text: action.payload.text,
          id: `card-${cardID}`
        };
        cardID += 1;
        console.log("action received", action);
        const newState = state.map(list => {
          if(list.id === action.payload.listID) {
            return {
              ...list,
              cards: [...list.cards, newCard]
            }
          } else {
            return list;
          }
        });
        
        return newState;
    
      default: 
        return state;
  } 
};

export default listsReducer;