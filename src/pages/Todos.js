import React from "react";
import { Container, Input, Grid, Button } from "@mui/material";
import Header from "../components/Header/Header";
import TodosList from "../components/TodosList/TodosList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearValue, updateValue } from "../state/actions";
import { TodoButtonGroup } from '../components/TodoButtonGroup/TodoButtonGroup';

const Todos = () => {
  const value = useSelector((state) => state.inputTodo.todoValue);
  const dispatch = useDispatch();

  function onChangeHandler(event) {
    dispatch(updateValue(event.target.value));
  }

  function onClickHandler() {
    dispatch(addTodo(value));
    dispatch(clearValue());
  }

  function onKeyPressHandler(event) {
    if (event.key === "Enter") {
      onClickHandler();
    }
  }

  return (
    <>
      <Header pageName="Todos" />
      <Container maxWidth="md">
        <TodoButtonGroup />
        <Grid container spacing={2} mt="35px">
          <Grid item xs={9}>
            <Input
              fullWidth
              value={value}
              onChange={onChangeHandler}
              onKeyPress={onKeyPressHandler}
              placeholder="Enter your todo..."
              autoFocus
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size="medium" onClick={onClickHandler}>
              Add todo
            </Button>
          </Grid>
        </Grid>
        <TodosList />
      </Container>
    </>
  );
};

export default Todos;
