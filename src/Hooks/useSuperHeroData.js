import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = () => {
    return axios.get(`http://localhost:4000/superheroes/$${heroId}`)
}

export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId], ()=> fetchSuperHero(heroId))
}
