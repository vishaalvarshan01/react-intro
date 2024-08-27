import { Box, Typography} from "@mui/material";
import '../App.css';

const DiningOption = ({ title = "Default Title" }: { title?: string }) => {
  return (
    <div>
      
        <div className="dining-options">
          <Box 
            sx={{
              width: "250px",
              height: "250px",
              borderRadius: "5px",
              backgroundColor: "white",
              zIndex: 1,
            }}
          >
            <Typography color='black'>Option 1</Typography>
          </Box>
        </div>

    </div>
  );
};

export default DiningOption;
