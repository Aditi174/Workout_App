import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner1.jpg";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        color="#333333"
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="23px"
        mt="30px"
      >
        Strain, grin <br />
        and lift again
      </Typography>
      <Typography color="#333333" lineHeight="35px" fontSize="22px" mb={4}>
        Checkout some more Exercises
      </Typography>
      <Button variant="contained" color="success" href="#exercises">
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "300px",
        }}
      >
        Exercise
      </Typography>

      <img
        src={HeroBannerImage}
        alt="Hero Banner Image"
        className="hero-banner-image"
      />
    </Box>
  );
}

export default HeroBanner;
