
import { UseSuperHeroesData } from "../Hooks/UseSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log('Perform side effect after data fetching',data);
  };
  const onError = (error) => {
    console.log('Perform side effect after encountering error',error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = UseSuperHeroesData(onSuccess,onError)

  // console.log({ isLoading, isFetching })
  
  
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }


  if (isError) {
    <h2>{error.message}</h2>
  }

  console.log(data)

  return (
    <>
      <h2>RQ SuperHeroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.map((hero) => {
        return (  
        <div key={hero.id}>
          <Link to={`/RQSuperHeroesPage/${hero.id}`}>{hero.name}</Link>
        </div>
        )
      })}
        {/* {data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })} */}
    </>
  );
};
