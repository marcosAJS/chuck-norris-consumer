import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";

const JokeDetails = ({joke}) => (
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={joke.icon_url}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {joke.value}
        </Typography>
      </CardContent>
    </CardActionArea>
    {/* <CardActions>
      <Button size="small" color="primary">
        Close
      </Button>
      <Button size="small" color="primary">
        Next
      </Button>
    </CardActions> */}
  </Card>
);

export default JokeDetails;
