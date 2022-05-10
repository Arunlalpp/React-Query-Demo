import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheros");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data,isError, error } = useQuery("super-heroes", fetchSuperheroes);

  if (isLoading) {
    <h2>Loading...</h2>;
  }
  if(isError){
    <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>RQ SuperHeroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
