import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { useExerciseContext } from "./ExerciseContext";

function BodyPart({ item }: { item: string }) {
  const { bodyPart, setBodyPart } = useExerciseContext();
  console.log(bodyPart);
  return (
    <Stack
      border={"1px solid #EBEBEB"}
      component="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "2px solid #FF2625" : "",
        backgroundColor: "#fff",
        // borderBottomLeftRadius: "20px",
        width: "150px",
        height: "120px",
        cursor: "pointer",
        gap: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="14px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
