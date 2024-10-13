import { Box } from "@mui/material";
import HeroBanner from "../../components/HeroBanner";
import SearchExercise from "../../components/SearchExercise";
import Exercise from "../../components/Exercise";


function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercise />
    </Box>
  );
}

export default Home;
