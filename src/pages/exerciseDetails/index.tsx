import { useEffect, useState } from "react";
import ExerciseVideos from "../../components/ExerciseVideos";
import Details from "../../components/Details";
import { Exerciseoptions, fetchData } from "../../utils/fetchdata";
import { useParams } from "react-router-dom";

export interface Detail {
  bodyPart: string;
  gifUrl: string;
  equipment: string;
  target: string;
  name: string;
}

function ExerciseDetails() {
  const [detail, setdetail] = useState<Detail | undefined>();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const fetchDetails = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youTubeSearchUrl =
        "'https://youtube-search-and-download.p.rapidapi.com/video/related'";
      const data = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        Exerciseoptions
      );
      setdetail(data);
    };
    fetchDetails();
  }, []);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Details detail={detail} />
      {/* <ExerciseVideos /> */}
    </>
  );
}

export default ExerciseDetails;
