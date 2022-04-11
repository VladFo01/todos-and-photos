import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Link} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const Header = ({ pageName, goBackTo = '/' }) => {
  const navigate = useNavigate();

  function onClickHandler(event) {
    event.preventDefault();
    navigate(goBackTo);
  }

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar sx={{ padding: "20px 0" }}>
            {pageName !== "Home" ? (
              <Link
                href="#"
                sx={{ display: "flex" }}
                underline="none"
                color="primary.contrastText"
                onClick={onClickHandler}
              >
                <KeyboardReturnIcon fontSize="large" />
              </Link>
            ) : null}
            <Typography
              variant="h4"
              align="center"
              component="h3"
              ml={pageName !== "Home" ? "30px" : 0}
              mr="30px"
            >
              {"Everlab Test Task"}
            </Typography>
            <Typography variant="h5" component="h5">
              {pageName}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
