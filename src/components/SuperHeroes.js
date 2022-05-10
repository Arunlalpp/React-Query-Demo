import {useState,useEffect} from 'react';
import axios from 'axios';

export const  SuperHeroes = () => {
  const[isloading,setIsLoading] = useState(true)
  const[data,setData] = useState([])


  useEffect(() => {
    axios.get('http://localhost:4000/superheros').then((res) => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isloading) {
    return <h2>Loading.....</h2>
  }
    return (
      <>
      <h2>Super Heroes Pages</h2>
      {data.map((hero) =>{
        return<div key={hero.name}>{hero.name}</div>
      })}
      </>
    )
    }
  