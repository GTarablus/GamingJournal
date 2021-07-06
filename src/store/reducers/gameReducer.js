const initialState = {
  games: [],
  game: null,
  filterBy: {
    type: '',
    location: '',
    date: '',
    time: '',
  },
  screenshots: [],
};

export function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_GAMES':
      return { ...state, games: action.games };
    case 'CLEAR_GAME':
      return { ...state, game: null };
    case 'SET_GAME':
      return { ...state, game: action.game };
    case 'SET_FILTER':
      return { ...state, filterBy: action.filterData };
    case 'SET_SCREENSHOTS':
      return { ...state, screenshots: action.screenshots };
    // case 'ADD_GAME':
    //   return { ...state, games: [...state.games, action.addedGame] };
    // case 'UPDATE_EVENT':
    //   return { ...state, event: action.event };
    // case 'REMOVE_EVENT':
    //   return {
    //     ...state,
    //     events: state.events.filter((event) => event._id !== action.eventId),
    //   };
    // case 'UPDATE_REVIEW':
    //   return {
    //     ...state,
    //     events: state.events.map((event) =>
    //       event._id === action.event._id ? action.event : event
    //     ),
    //   };
    default:
      return state;
  }
}
