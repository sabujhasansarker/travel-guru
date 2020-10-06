import { GETDATA, BLACK, GETUSER, LOGOUT } from "../type";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GETDATA:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case BLACK:
      return {
        ...state,
        black: payload,
      };
    case GETUSER:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
