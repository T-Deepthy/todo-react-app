import React, { useState, useEffect } from 'react';
import {
    createTodoComponent,
    deleteTodoComponent,
    editTodoComponent,
    getTodoComponents,
  } from "../../actions/todo";
  import { useDispatch, useSelector } from "react-redux";
  import {
    Input,
    Modal,
    Form,
    message
  } from "antd";
  import uuid from "react-uuid";
const ToDoEdit = ({visible,
    handleCancel,
    edit,
  }) => {
    const [todo, setTodo] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos);
    const resetValue = () => {
      setTodo("");
      setDescription("");
    };
    const createToDo = () => {
      if (todo) {
        dispatch(
          createTodoComponent({
            task: todo, description:description
          })
        );
        resetValue();
        handleCancel();
        if (todoList.status === 200) {
          message.success("Successfully added todo.")
        }
      } else {
        message.error("Please fill all mandatory fields.")
      }
    };
    const editToDo = () => {
      if(todo){
        dispatch(
          editTodoComponent({ task: todo, description:description },edit._id)
        );
        resetValue();
        handleCancel();
        if (todoList.status === 200) {
          message.success("Successfully updated todo.")
        }
      }
      else {
        message.error("Please fill all mandatory fields.")
      }
    };
    const updateForm = () => {
      if (!edit._id) createToDo();
      else editToDo();
    };
    useEffect(() => {
        console.log('edit', edit)
        if(edit._id){
            setTodo(edit.task);
            setDescription(edit.description);
        }  
    }, [edit]);
    return (
      <React.Fragment>
        <Modal
          title={edit._id ? "Edit Modal" : "Create Modal"}
          visible={visible}
          okText={edit._id ? "Edit" : " Create"}
          onOk={() => updateForm()}
          onCancel={() => handleCancel()}
        >
          <Form layout="vertical">
            <Form.Item
              label="Title"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                required={true}
              />
            </Form.Item>
            <Form.Item
              label="Description"
              rules={[{ required: true, message: "Please !" }]}
            >
              <Input
                type="textarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
};

export default ToDoEdit;