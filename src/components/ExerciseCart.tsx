import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ExerciseCart({ exercise }: any) {
  return (
    <>
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction={"row"}>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#ffa9a9",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "5px",
              textTransform: "Capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#ffa9a9",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "5px",
              textTransform: "Capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "14px", xs: "10px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Link>
    </>
  );
}

export default ExerciseCart;
