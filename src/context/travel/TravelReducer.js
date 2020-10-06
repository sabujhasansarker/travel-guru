import { GETDATA, BLACK, GETUSER, LOGOUT, USERERROR } from "../type";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GETDATA:
      return {
        ...state,
        data: payload,
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
        loading: false,
      };
    case USERERROR:
      return {
        ...state,
        loading: false,
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
