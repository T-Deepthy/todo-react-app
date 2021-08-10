import React, { useEffect, useState } from "react";
import {
  createTodoComponent,
  deleteTodoComponent,
  editTodoComponent,
  getTodoComponents,
} from "../../actions/todo";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Input,
  List,
  Typography,
  PageHeader,
  Modal,
  Form,
  message
} from "antd";
import uuid from "react-uuid";
import "./ToDo.css";
import ToDoList from "../ToDoList/ToDoList";
const ToDo = () => {
  return (
    <Row>
      <Col span={24}>
        <PageHeader title="React App To Learn Redux" />
      </Col>
      <Col span={24}>
        <ToDoList />
      </Col>
    </Row>
  );
};

export default ToDo;
