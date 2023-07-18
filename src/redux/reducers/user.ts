import { AnyAction } from 'redux';

const INITIAL_STATE_USER = {
  email: '',
};

function user(state = INITIAL_STATE_USER, action: AnyAction) {
  switch (action.type) {
    case 'EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default user;
