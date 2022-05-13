import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperheros = () => {
  return axios.get("http://localhost:4000/superheros");
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheros',hero)
}
export const UseSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heros", fetchSuperheros, {
    onSuccess,
    onError,
    select: (data) => {
      // const superHeroNames = data.data.map((hero) => hero.name);
      // return superHeroNames;
      return data.data;
    },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('super-heros')
    }
  })
}
