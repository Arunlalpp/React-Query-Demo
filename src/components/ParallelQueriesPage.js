import { useQuery } from "react-query";
import axios from "axios";


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheros')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}
export const ParallelQueriesPage = () => {

    useQuery('super-heros',fetchSuperHeroes)
    useQuery('friends',fetchFriends)
  return (
    <div>ParallelQueriesPage</div>
  )
}
