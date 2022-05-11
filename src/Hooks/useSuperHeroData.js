
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = heroId  => {
    return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
  return useQuery(['super-heros', heroId], ()=> fetchSuperHero(heroId))
}