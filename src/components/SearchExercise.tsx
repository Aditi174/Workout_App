import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Exerciseoptions, fetchData } from "../utils/fetchdata";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { useExerciseContext } from "./ExerciseContext";

function SearchExercise() {
  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const url1 = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

  const {  setResult, setExercises, search, setSearch } = useExerciseContext();
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    async function fetchExerciseList() {
      const bodyPartData = await fetchData(url1, Exerciseoptions);
      setBodyParts(["all", ...bodyPartData]);
      console.log(bodyPartData);
    }
    fetchExerciseList();
  }, []);

  async function handleSearch() {
    if (search) {
      const exerciseList = await fetchData(url, Exerciseoptions);
      console.log(exerciseList);
      const filteredExercises = exerciseList.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(filteredExercises);
      setResult(true)
      console.log(filteredExercises);
    }
  }

  return (
    <Stack
      display="flex"
      alignItems="center"
      mt="20px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> can do today
      </Typography>
      <Box position="relative" mb="42px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            // backgroundColor: "#fff",
            borderRadius: "20px",
            height: "76px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "140px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          overflowY: "hidden",
          position: "relative",
          width: "100%",
          p: "20px",
          // border:"2px solid black",
          overflowX: "hidden",
        }}
      >
        
          <HorizontalScrollbar bodyParts={bodyParts} />
        
      </Box>
    </Stack>
  );
}

export default SearchExercise;
