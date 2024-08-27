import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Typography variant="h3">
          Seems like you have lost your way there, get back home
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <KeyboardReturnIcon style={{ width: "200px", height: "200px",color:'red' }}/>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
