import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
    return axios.get("http://localhost:4000/superheros");
  };
export const UseSuperHeroesData = (onSuccess,onError) => {
  return useQuery("super-heroes", fetchSuperheroes, {
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
