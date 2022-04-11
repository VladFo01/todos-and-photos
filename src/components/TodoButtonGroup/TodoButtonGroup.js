import React from "react";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../state/actions";

export const TodoButtonGroup = () => {
  const sortedBy = useSelector((state) => state.todo.sortedBy);
  const dispatch = useDispatch();

  function onClickSortChanger(event) {
    console.log(sortedBy);
    dispatch(changeSort(event.target.id));
  }

  return (
    <Grid container mt="35px" justifyContent="center">
      <Grid item xs={4}>
        <ButtonGroup variant="contained">
          <Button
            onClick={onClickSortChanger}
            color={sortedBy === "all" ? "secondary" : "primary"}
            id="all"
          >
            All
          </Button>
          <Button
            onClick={onClickSortChanger}
            color={sortedBy === "todo" ? "secondary" : "primary"}
            id="todo"
          >
            Todo
          </Button>
          <Button
            onClick={onClickSortChanger}
            color={sortedBy === "done" ? "secondary" : "primary"}
            id="done"
          >
            Done
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};
