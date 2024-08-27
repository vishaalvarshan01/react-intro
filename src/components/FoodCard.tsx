import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type foodItem = {
  title : string,
  description : string,
  img : string
}

const FoodCard = (props : foodItem) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const handleDescriptionClick = () => {
    setShowFullDescription(!showFullDescription);
    console.log("clicked")
  };

  return (
    <Card sx={{maxHeight: 300, marginBottom: 100}}>
      <CardMedia
        component="img"
        alt="food picture"
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="black" noWrap onClick={handleDescriptionClick}>
          {showFullDescription ? props.description : (props.description.length > 64 ? `${props.description.substring(0, 64)}...` : props.description)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
