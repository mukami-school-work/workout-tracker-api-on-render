import React from 'react';
import { Typography, Stack, Box} from '@mui/material';

import HeroBannerImg  from '../assets/images/banner3.png';
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "210px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ffb700" fontWeight={600} fontSize="26px">
        Harder, Faster, Stronger.
      </Typography>

      <Typography
        fontWeight={700}
        color="#b2becd"
        sx={{ fontSize: { lg: "54px", xs: "40px" } }}
      >
        Workout, Keep Fit <br /> And Healthy
      </Typography>

      <Typography fontSize="22px" color="#dbe1e8" lineHeight="35px" mb={4}>
        Check out the most effective exercises, and login to <br />
        keep truck of your workout by adding the workout <br />
        you've done into your tracker.
      </Typography>

      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "35px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#ffb700",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "#dbe1e8",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#ffb700"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
          textAlign: "center",
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner