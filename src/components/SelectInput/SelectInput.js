import React from "react";
import { Box, Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateId } from "../../state/actions";

export const SelectInput = () => {
  const id = useSelector((state) => state.selectInput.id);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateId(event.target.value));
  };

  const selectItems = [];
  for (let i = 1; i <= 100; i++) {
    selectItems.push(i);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Id</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={id}
          label="Id"
          onChange={handleChange}
        >
          {selectItems.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
