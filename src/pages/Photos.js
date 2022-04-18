import {
  Container,
  Grid,
  Button,
  CardMedia,
  CardContent,
  Typography,
  FormControl,
  FormHelperText,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { SelectInput } from "../components/SelectInput/SelectInput";
import { clearId, removeError } from "../state/actions";
import { fetchPhotosAsync } from "../state/asyncActions";

const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photo.photos);
  const id = useSelector((state) => state.selectInput.id);
  const error = useSelector((state) => state.error.errorPhotos);

  function onSubmitHandler(event) {
    event.preventDefault();

    dispatch(fetchPhotosAsync(id));
  }

  useEffect(() => {
    if (photos.toString()) {
      dispatch(clearId());
      dispatch(removeError("PHOTOS"));
    }
  }, [photos]);

  return (
    <>
      <Header pageName="Photos" />
      <Container maxLength="sm">
        <form onSubmit={onSubmitHandler}>
          <FormControl variant="standard" error={Boolean(error)} fullWidth>
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
              <Grid item sm={3}>
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  disabled={
                    (Boolean(photos.toString()) && photos[0].albumId === id) ||
                    id === ""
                  }
                >
                  Get photos
                </Button>
              </Grid>
              <Grid item xs={6}>
                <FormHelperText>{error}</FormHelperText>
              </Grid>
            </Grid>
          </FormControl>
        </form>
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
