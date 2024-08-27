import { Box, Typography } from "@mui/material";
import FoodCard from "../FoodCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const foodCards = [
  {
    id: 1,
    title: "Yard Bird Chicken",
    description: "Delicious chicken dish with a secret marinade.",
    img: "https://live.staticflickr.com/7550/16313434745_324d85e205_b.jpg",
  },
  {
    id: 2,
    title: "Ribs",
    description: "Tender and juicy ribs slow-cooked to perfection.",
    img: "https://www.allrecipes.com/thmb/IWVelWahUb2gQxixWJC2N-HXp0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-2x1-210-e799db142f594b00bb317bb357d0971c.jpg",
  },
  {
    id: 3,
    title: "Pulled Pork",
    description: "Slow-cooked pork shoulder with a tangy sauce. Extra text",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNOqPPgHg_gtpl-FO3k61Bnr9BL99R_a1OQ&s",
  },
  {
    id: 4,
    title: "Brisket",
    description: "Smoked beef brisket with a flavorful bark.",
    img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2017/05/Beef-Brisket-main.jpg",
  },
];
const StarterDishesList = () => {
  return (
    <div>
      <Typography variant="h3">Starters</Typography>
      <Box sx={{ display: "flex", overflow: "auto", gap: 2 }}>
        <Grid container spacing={4} justifyContent="flex-start">
          {foodCards.map((foodCard) => (
            <Grid
              item
              key={foodCard.id}
              xs={12}
              sm={4}
              md={4}
              lg={3}
              sx={{ height: "250px", width: "250px", marginBottom: 10 }}
            >
              <FoodCard
                title={foodCard.title}
                description={foodCard.description}
                img={foodCard.img}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default StarterDishesList;
