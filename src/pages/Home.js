import { Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const Home = () => {
  const navigate = useNavigate();

  function onClickHandler(to, event) {
    event.preventDefault();
    navigate(to);
  }

  return (
    <>
      <Header pageName={"Home"} />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "40vh",
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="secondary"
          disableElevation
          onClick={onClickHandler.bind(null, "/todos")}
        >
          Todos
        </Button>
        <Button
          sx={{ marginLeft: "30px" }}
          variant="contained"
          size="large"
          color="secondary"
          disableElevation
          onClick={onClickHandler.bind(null, "/photos")}
        >
          Photos
        </Button>
      </Container>
    </>
  );
};

export default Home;
