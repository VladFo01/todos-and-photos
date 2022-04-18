import React from "react";
import {
  Container,
  Input,
  Grid,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Header from "../components/Header/Header";
import TodosList from "../components/TodosList/TodosList";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  catchError,
  clearValue,
  removeError,
  updateValue,
} from "../state/actions";
import { TodoButtonGroup } from "../components/TodoButtonGroup/TodoButtonGroup";

const Todos = () => {
  const value = useSelector((state) => state.inputTodo.todoValue);
  const error = useSelector((state) => state.error.errorTodos);
  const dispatch = useDispatch();

  function onChangeHandler(event) {
    dispatch(updateValue(event.target.value));
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!value) {
      dispatch(
        catchError("TODOS", "Your todo is empty! Type something before the submit")
      );
      return;
    }
    dispatch(addTodo(value));
    dispatch(removeError("TODOS"));
    dispatch(clearValue());
  }

  return (
    <>
      <Header pageName="Todos" />
      <Container maxWidth="md">
        <TodoButtonGroup />
        <form onSubmit={onSubmitHandler}>
          <FormControl fullWidth error={Boolean(error)} variant={"standard"}>
            <Grid container spacing={2} mt="35px">
              <Grid item xs={9}>
                <Input
                  fullWidth
                  value={value}
                  onChange={onChangeHandler}
                  placeholder="Enter your todo..."
                  autoFocus
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" type="submit" size="medium">
                  Add todo
                </Button>
              </Grid>
              <Grid item xs={12} alignSelf="center">
                <FormHelperText>{error}</FormHelperText>
              </Grid>
            </Grid>
          </FormControl>
        </form>
        <TodosList />
      </Container>
    </>
  );
};

export default Todos;
