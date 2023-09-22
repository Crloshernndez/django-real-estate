import {
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
} from "../actions/properties/types";

const initialState = {
  properties: [],
};

export default function propertiesListReducers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROPERTY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        properties: [],
      };
    case PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: payload.results,
      };
    case PROPERTY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
