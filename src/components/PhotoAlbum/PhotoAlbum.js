import React from "react";
import { Grid, CardMedia, CardContent, Typography } from "@mui/material";

export const PhotoAlbum = () => {
  const photos = useSelector((state) => state.photo.photos);

  return (
    <Grid container spacing={2}>
      {photos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <CardMedia
            component="img"
            sx={{ paddingTop: "56.25%" }}
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
  );
};
