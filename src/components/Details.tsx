import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";
import { Detail } from "../pages/exerciseDetails";
import { Box, Button, Stack, Typography } from "@mui/material";

interface DetailProps {
  detail: Detail;
}

function Details(props: DetailProps) {
  const { bodyPart, target, equipment, name, gifUrl } = props.detail;
  console.log(props.detail);
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    { icon: TargetImage, name: target },
    { icon: Equipment, name: equipment },
  ];

  return (
    <Box sx={{ display: "flex", gap: "50px" }}>
      <Stack
        gap={60}
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      </Stack>
      <Stack
        sx={{ gap: { lg: "35px", xs: "20px" }, width: "40%" }}
      >
        <Typography
          sx={{ fontSize: { lg: "34px", xs: "20px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercise Keeps you strong. {name} {""} is one of the best exercises to
          target your {target} it will help you to improve your, mood and gain
          energy.
        </Typography>
        {extraDetails.map((items) => (
          <Stack key={items.name} direction="row" gap={4} alignItems={"center"}>
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
              }}
            >
              <img src={items.icon} alt={items.name} loading="lazy" />
            </Button>
            <Typography variant="h6" fontWeight={700} textTransform={"capitalize"}>
              {items.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default Details;
