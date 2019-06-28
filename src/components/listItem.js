import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";

const ListItem = ({ joke }) => (
  <Grid container key={joke.id}>
    <Grid xs={4} sm={2}>
      <CardMedia
        component="img"
        alt={joke.value}
        height="140"
        image={joke.icon_url}
        className="list-item-img"
        title="Contemplative Reptile"
      />
    </Grid>
    <Grid xs={8} sm={10}>
      <CardContent>
        <Typography
          variant="body2"
          className="list-item-text"
          color="textSecondary"
        >
          {joke.value}
        </Typography>
      </CardContent>
    </Grid>
  </Grid>
);

export default ListItem;
