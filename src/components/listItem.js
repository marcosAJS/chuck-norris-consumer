import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';
import React from "react";

const ListItem = ({ joke }) => (
  <Grid className="list-item" container key={joke.id}>
    <Grid item xs={4} sm={2}>
      <CardMedia
        component="img"
        alt={joke.value}
        height="140"
        image={joke.icon_url}
        className="list-item-img"
        title="Contemplative Reptile"
      />
    </Grid>
    <Grid item xs={8} sm={10}>
      <CardContent>
        <Typography
          variant="h6"
          className="list-item-text"
          color="textSecondary"
        >
          {moment(joke.updated_at).format('MM-DD-YYYY')}
        </Typography>
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
