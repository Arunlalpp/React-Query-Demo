
import axios from 'axios';
import { useQuery,useQueryClient } from 'react-query';

const fetchSuperHero = ({queryKey})  => {

    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient()
  return useQuery(['super-heros', heroId], fetchSuperHero, {

    initialData: () => {
      const hero =queryClient
      .geQuerytData('superheros')
      ?.data?.find((hero) => hero.id === parseInt(heroId)) 
      if(hero) {
        return {data: hero}
      }
      else {
        return undefined
      }
    }
  })
}
