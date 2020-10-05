import { GETDATA, BLACK } from "../type";

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
    default:
      return state;
  }
};
