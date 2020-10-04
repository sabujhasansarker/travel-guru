import { GETDATA } from "../type";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GETDATA:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    default:
      return state;
  }
};
