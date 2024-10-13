export const Exerciseoptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
