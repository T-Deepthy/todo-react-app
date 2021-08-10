import axios from 'axios'
import { API } from './config'
import * as types from './types'

export const getTodoComponents = () => {
  return dispatch => {
    dispatch({
      type: types.TODO_COMPONENTS_FETCH_REQUEST,
    })
    axios.get(`${API}todos`)
      .then(function (response) {
        dispatch({
          type: types.TODO_COMPONENTS_FETCH_SUCCESS,
          response
        })
      })
      .catch(function (error) {
        dispatch({
          type: types.TODO_COMPONENTS_FETCH_FAILED,
          error
        })
      });
  };
}

export const createTodoComponent = (payload) => {
  return dispatch => {
    axios.post(`${API}todo/create`, payload)
      .then(function (response) {
        dispatch({
          type: types.TODO_COMPONENT_CREATE_SUCCESS,
          response
        })
      })
      .catch(function (error) {
        dispatch({
          type: types.TODO_COMPONENT_CREATE_FAILED,
          error
        })
      });
  };
}

export const editTodoComponent = (payload,id) => {
  return dispatch => {
    axios.put(`${API}todo/${id}/update`, payload)
      .then(function (response) {
        dispatch({
          type: types.TODO_COMPONENT_EDIT_SUCCESS,
          response
        })
      })
      .catch(function (error) {
        dispatch({
          type: types.TODO_COMPONENT_EDIT_FAILED,
          error
        })
      });
  };
}

export const deleteTodoComponent = (payload) => {
  return dispatch => {
    axios.delete(`${API}todo/${payload._id}/delete`)
      .then(function (response) {
        dispatch({
          type: types.TODO_COMPONENT_DELETE_SUCCESS,
          payload
        })
      })
      .catch(function (error) {
        dispatch({
          type: types.TODO_COMPONENT_DELETE_FAILED,
          error
        })
      });
  };
}