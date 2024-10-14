import { Box, Stack, Typography } from "@mui/material";
import { useExerciseContext } from "./ExerciseContext";
import ExerciseCart from "./ExerciseCart";
import { useEffect } from "react";
import { Exerciseoptions, fetchData } from "../utils/fetchdata";


function Exercise() {
  const { exercises, result, bodyPart, setExercises } = useExerciseContext();

  useEffect(()=>{
    const fetchExercises = async () => {
      let exerxisesData = []
      if(bodyPart ==='all'){
        exerxisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          Exerciseoptions
        );
      }else{
        exerxisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          Exerciseoptions
        );
      }
      setExercises(exerxisesData);
    
    };

    fetchExercises();
  },[bodyPart])

  // console.log(setExercises);
  // console.log(setBodyPart);
  // console.log(exercises);

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      {exercises.length > 0 ? (
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {exercises.map((exercise, index) => (
            <ExerciseCart key={index} exercise={exercise} />
          ))}
        </Stack>
      ) : result ? (
        <Typography variant="h6" textAlign="center">
          Sorry, No Exercise Available for this partiuclar BodyPart.
        </Typography>
      ) : null}
    </Box>
  );
}

export default Exercise;
