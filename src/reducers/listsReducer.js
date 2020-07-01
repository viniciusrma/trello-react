const initialState = [
  {
    title: "Episode 1",
    id: 0,
    cards: [
      {
        id:0,
        text: "We created a static list and a static card"
      },
      {
        id: 1,
        text: "We used  a mix between material UI and style components"
      }
    ]
  },
  {
    title: "Episode 2",
    id: 0,
    cards: [
      {
        id:0,
        text: "We created our first reducer"
      },
      {
        id: 1,
        text: "and rendered many cards on our list with static data"
      },
      {
        id: 2,
        text: "we also made some little changes forgotten in the last class"
      }
    ]
  }

];

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state;
  } 
}

export default listsReducer;