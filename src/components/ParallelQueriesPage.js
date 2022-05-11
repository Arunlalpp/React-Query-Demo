import { useQuery } from "react-query";
import axios from "axios";


const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheros')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}
export const ParallelQueriesPage = () => {

    const {data: superheros} = useQuery('super-heros',fetchSuperHeroes)
    const {data: friends} = useQuery('friends',fetchFriends)
  return (
    <div>ParallelQueriesPage</div>
  )
}
