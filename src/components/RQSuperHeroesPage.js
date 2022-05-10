import { useQuery } from "react-query";
import axios from "axios";

export const  RQSuperHeroesPage = () => {
  const {isLoading,data} = useQuery('super-heroes',() => {
    return  axios.get('http://localhost:4000/superheros')
  })
  if(isLoading){
    <h2>Loading...</h2>
  }
    return (
      <>
      <h2>RQ SuperHeroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
      </>
    )
  }
  