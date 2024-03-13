import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Description() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="" title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Event Name Here.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Event Description Here.
        </Typography>
      </CardContent>
    </Card>
  );
}
