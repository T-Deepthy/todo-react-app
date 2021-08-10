import React, { useState, useEffect } from 'react';
import {
    createTodoComponent,
    deleteTodoComponent,
    editTodoComponent,
    getTodoComponents,
  } from "../../actions/todo";
  import { useDispatch, useSelector } from "react-redux";
  import {
    Row,
    Button,
    List,
    Typography,
    message
  } from "antd";
import ToDoEdit from '../ToDoEdit/ToDoEdit';

const ToDoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos);
    useEffect(() => {
      dispatch(getTodoComponents());
    }, []);
    const [visible, setVisible] = useState(false);
  
    const showModal = () => {
      setVisible(true);
    };
    const handleOk = () => {
      setVisible(false);
    };
    const [edit, setEdit] = useState({});
    const handleCancel = () => {
      setVisible(false);
    };
    const editTodo = (item) => {
      setEdit(item);
      showModal();
    };
    const createTodo = () => {
      setEdit({});
      showModal();
    };
    const deleteTodo = (item) => {
      dispatch(deleteTodoComponent(item));
      if (todoList.status === 200) {
        message.success("Successfully deleted todo.")
      }
    };
  
    return (
      <React.Fragment>
        <Button onClick={() => createTodo()}>Create</Button>
        <List
          header={<div>TODO LIST</div>}
          bordered
          className="m-t-4"
          dataSource={todoList.data}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button onClick={() => editTodo(item)}>Edit</Button>,
                <Button onClick={() => deleteTodo(item)}>Delete</Button>,
              ]}
            >
              <Typography.Text mark>{item.task}</Typography.Text>
              {item.description}
            </List.Item>
          )}
        />
        {visible && <ToDoEdit
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          handleOk={handleOk}
          edit={edit}
        /> }
      </React.Fragment>
    );
};

export default ToDoList;