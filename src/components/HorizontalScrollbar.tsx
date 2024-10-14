import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
// import { useExerciseContext } from "./ExerciseContext";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useContext } from "react";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

interface HorizontalScrollbarProps {
  bodyParts: string[];
}

function HorizontalScrollbar({ bodyParts }: HorizontalScrollbarProps) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((bodyPart) => (
        <Box key={bodyPart} title={bodyPart} itemID={bodyPart} m="0 40px">
          <BodyPart item={bodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
