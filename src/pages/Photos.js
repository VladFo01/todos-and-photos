import {
  Container,
  Grid,
  Button,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { SelectInput } from "../components/SelectInput/SelectInput";
import { clearId } from "../state/actions";
import { fetchPhotosAsync } from "../state/asyncActions";

const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photo.photos);
  const id = useSelector((state) => state.selectInput.id);

  function onClickHandler() {
    dispatch(fetchPhotosAsync(id));
    dispatch(clearId());
  }

  return (
    <>
      <Header pageName="Photos" />
      <Container maxLength="sm">
        <Grid
          container
          justifyContent={"center"}
          alignItems="center"
          spacing={4}
          mt="35px"
        >
          <Grid item sm={4}>
            <SelectInput />
          </Grid>
          <Grid item sm={2}>
            <Button
              variant="contained"
              size="medium"
              onClick={onClickHandler}
              disabled={
                (Boolean(photos.toString()) && photos[0].albumId === id) ||
                id === ""
              }
            >
              Get photos
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {photos.map((photo) => (
            <Grid item key={photo.id} xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                sx={{ pt: "30px" }}
                image={photo.url}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2">
                  {photo.title}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Photos;
