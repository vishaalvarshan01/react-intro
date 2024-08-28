import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type foodItem = {
  title: string;
  description: string;
  img: string;
  liked : boolean
};

const FoodCard = (props: foodItem) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  const [liked, setLiked] = useState<boolean>(props.liked);

  const handleDescriptionClick = () => {
    setShowFullDescription(!showFullDescription);
    console.log("clicked");
  };

  const likeADish = () => {
    console.log(props.liked)
    setLiked((prev) => {
      return !prev; 
    })
  }

  return (
    <Card sx={{ maxHeight: 300, marginBottom: 100 }}>
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
        <Typography
          variant="body2"
          color="black"
          noWrap
          onClick={handleDescriptionClick}
        >
          {showFullDescription
            ? props.description
            : props.description.length > 64
            ? `${props.description.substring(0, 64)}...`
            : props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to Cart</Button>
        {/* <FavoriteBorderIcon onClick={(prev) => setLiked(!prev)}/> */}
        {liked ? (
          <FavoriteBorderIcon onClick={likeADish}/>
        ) : (
          <FavoriteIcon onClick={likeADish} color="warning" />
        )}
      </CardActions>
    </Card>
  );
};

export default FoodCard;
