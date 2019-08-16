import { DECREMENT, INCREMENT } from './actions'

const initialState = {
  countClass: 0,
  countHooks: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return (action.origin === 'hooks') ? { ...state, countHooks: state.countHooks - 1 } : { ...state, countClass: state.countClass - 1 };
    case INCREMENT:
      return (action.origin === 'hooks') ? { ...state, countHooks: state.countHooks + 1 } : { ...state, countClass: state.countClass + 1 };
    default:
      return state;
  }
}

export default reducer;