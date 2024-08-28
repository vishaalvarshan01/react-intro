import { Button, Typography,Alert } from "@mui/material";
import "../App.css";
import SignatureDishesList from "./signature-dishes/SignatureDishesList";
import StarterDishesList from "./starter-dishes/StarterDishesList";

import { useState } from "react";

const Home = () => {
  const [location, setLocation] = useState<string>("Chennai");

  return (
    <div>
      {location !== "Chennai" ? (<Alert severity="info">Apologies , we don't have stores here.</Alert>) : <></>}
      <Typography
        textAlign="center"
        color="red"
        gutterBottom
        sx={{
          fontSize: {
            xs: "h4.fontSize",
            md: "h2.fontSize",
            lg: "h1.fontSize",
          },
        }}
      >
        Welcome to Devour
      </Typography>
      <Typography variant="h4">Set Location as : {location}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setLocation("Chennai")}
      >
        Chennai
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setLocation("Bangalore")}
      >
        Bangalore
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setLocation("Hyderabad")}
      >
        Hyderabad
      </Button>

      <div>
        <SignatureDishesList />
        <StarterDishesList />
      </div>
    </div>
  );
};

export default Home;
