import * as types from '../actions/types'
const INITIAL_STATE = { data: [], error: null, loading: false, status: null }
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TODO_COMPONENTS_FETCH_REQUEST:
      return {
        data: [],
        error: null,
        loading: true,
        status: null
      }
    case types.TODO_COMPONENTS_FETCH_SUCCESS:
      return {
        data: action.response.data,
        error: null,
        loading: false,
        status: action.response && action.response.status
      }
    case types.TODO_COMPONENTS_FETCH_FAILED:
      return {
        data: [],
        error: action.error,
        loading: false,
        status: null
      }

    case types.TODO_COMPONENT_CREATE_SUCCESS:
      return {
        ...state,
        data: [ action.response.data.task , ...state.data],
      }
    case types.TODO_COMPONENT_CREATE_FAILED:
      return {
        ...state,
        error: action.error,
      }
      
    case types.TODO_COMPONENT_EDIT_SUCCESS:
      return {
        ...state,
        data: state.data.map(comp => {
          if (comp._id === action.response.data._id) {
            return action.response.data;
          }
          return comp;
        }),
      }
    case types.TODO_COMPONENT_EDIT_FAILED:
      return {
        ...state,
        error: action.error,
      }

    case types.TODO_COMPONENT_DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.filter(todo => todo._id !== action.payload._id)
      }
    case types.TODO_COMPONENT_DELETE_FAILED:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }

}