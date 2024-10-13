import { createRoot } from "react-dom/client";

import "./index.css";
import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ExerciseContextProvider } from "./components/ExerciseContext";

createRoot(document.getElementById("root")!).render(
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <ExerciseContextProvider>
      <RouterProvider router={router} />
    </ExerciseContextProvider>
  </Box>
);
