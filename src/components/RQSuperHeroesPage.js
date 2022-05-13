import { useAddSuperHeroData, UseSuperHeroesData } from "../Hooks/UseSuperHeroesData";
import { Link } from "react-router-dom";
import { useState } from 'react';

export const RQSuperHeroesPage = () => {


  const[name, setName] = useState('')
  const[dep ,setDep] = useState('')


  const onSuccess = () => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = UseSuperHeroesData(
    onSuccess,
    onError
  );
  const {mutate: addHero } = useAddSuperHeroData ()

  const handleAddHeroclick = () => {
    console.log({name, dep})
    const hero = {name, dep}
    addHero(hero)
  }
  // console.log({ isLoading, isFetching })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQ SuperHeroes Page</h2>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' value={dep} onChange={(e) => setDep(e.target.value)} />
        <button onClick={handleAddHeroclick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/RQSuperHeroesPage/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })} */}
    </div>
  );
};
