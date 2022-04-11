import React from "react";
import { Container, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Todo = () => {
  const { todoId } = useParams();
  const todos = useSelector((state) => state.todo.todos);
  const todo = todos.find((todo) => todo.id === todoId);

  return (
    <>
      <Header pageName={`Todo: ${todoId}`} goBackTo="/todos" />
      <Container maxWidth="md">
        <Typography variant="h4" component={"h5"} mt={"25px"}>
          <b>Id: </b> {todo.id}
        </Typography>
        <Typography variant="h4" component={"h5"} mt={"25px"}>
          <b>Value: </b> {todo.value}
        </Typography>
        <Typography variant="h4" component={"h5"} mt={"25px"}>
          <b>Status: </b> {todo.done ? "done" : "not done"}
        </Typography>
      </Container>
    </>
  );
};

export default Todo;
