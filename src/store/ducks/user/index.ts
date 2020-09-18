import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';
import { environment } from '../../../environment/environment';

const token = localStorage.getItem(environment.REACT_APP_LOCAL_STORAGE_USER);
const userLogin: UserState = JSON.parse(localStorage.getItem("userLogin") as any);

const INITIAL_STATE: UserState = {
  user: {
    id: '',
    token: '',
    email: '',
    name: '',
  },
};

if (token) {
  INITIAL_STATE.user = userLogin.user;
}

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  action,
) => {
  const updatedUserState = state;

  switch (action.type) {
    case UserTypes.UPDATE_USER:
      updatedUserState.user = action.payload.user;
      // localStorage.setItem(
      //   environment.REACT_APP_LOCAL_STORAGE_USER_AUTH,
      //   JSON.stringify(),
      // );

      return { ...state, ...updatedUserState };

    case UserTypes.REMOVE_USER:
      //remover dados do usuario e token do localstorage
      localStorage.removeItem("userLogin");
      localStorage.removeItem(environment.REACT_APP_LOCAL_STORAGE_USER);
      //resetar estado do usario
      INITIAL_STATE.user = {
        id: '',
        token: '',
        email: '',
        name: '',
      }

      return { ...state, ...INITIAL_STATE };

    default:
      return state;
  }
};

export default reducer;
