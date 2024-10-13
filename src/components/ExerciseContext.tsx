import { createContext, ReactNode, useContext, useState } from "react";

interface BodyPart {
  name: string;
  bodyPart: string;
  equipment: string;
  target: string;
}

interface Exercise {
  exercises: BodyPart[];
  bodyPart: string;
  setBodyPart: (exercises: string) => void;
  setExercises: (bodyPart: BodyPart[]) => void;
  search: string;
  setSearch: (search: string) => void;
  result: boolean;
  setResult: (result: boolean) => void;
}

const ExerciseContext = createContext<Exercise | undefined>(undefined);

export function ExerciseContextProvider({ children }: { children: ReactNode }) {
  const [bodyPart, setBodyPart] = useState<string>("all");
  const [exercises, setExercises] = useState<BodyPart[]>([]);
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState(false);

  return (
    <ExerciseContext.Provider
      value={{
        result,
        setResult,
        search,
        setSearch,
        exercises,
        bodyPart,
        setExercises,
        setBodyPart,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
}

export function useExerciseContext() {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error(
      "useExerciseContext must be used within an ExerciseProvider"
    );
  }
  return context;
}
