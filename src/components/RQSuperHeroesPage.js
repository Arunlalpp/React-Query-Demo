
import { UseSuperHeroesData } from "../Hooks/UseSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log('Perform side effect after data fetching',data);
  };
  const onError = (error) => {
    console.log('Perform side effect after encountering error',error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = UseSuperHeroesData(onSuccess,onError)

  console.log({ isLoading, isFetching })
  
  
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }


  if (isError) {
    <h2>{error.message}</h2>
  }


  return (
    <>
      <h2>RQ SuperHeroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
        {data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })}
    </>
  );
};
