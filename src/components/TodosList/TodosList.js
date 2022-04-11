import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, deleteTodo } from "../../state/actions";

const TodosList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const sortedBy = useSelector((state) => state.todo.sortedBy);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onChangeHandler(id) {
    dispatch(changeStatus(id));
  }

  function filterCallback(todo) {
    switch (sortedBy) {
      case "all":
        return true;
      case "todo":
        return !todo.done;
      case "done":
        return todo.done;
      default:
        return true;
    }
  }

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 650, bgcolor: "background.paper" }}
    >
      {todos.filter(filterCallback).map((todo) => {
        const labelId = `checkbox-list-secondary-label-${todo.id}`;
        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <>
                <Checkbox
                  edge="start"
                  onChange={onChangeHandler.bind(null, todo.id)}
                  tabIndex={-1}
                  checked={todo.done}
                  inputProps={{ "aria-labelledby": labelId }}
                />
                <IconButton
                  edge="end"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  <ClearIcon />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton onClick={() => navigate(`/todos/${todo.id}`)}>
              <ListItemText
                sx={{ textDecoration: todo.done ? "line-through" : "none" }}
                id={labelId}
                primary={todo.value}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodosList;
