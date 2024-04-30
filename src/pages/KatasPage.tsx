import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";

export const KatasPage = () => {
  
  const loggedIn = useSessionStorage('sessionJWTToken')
  const navigate = useNavigate()

  useEffect(()=>{
    if(!loggedIn){
      return navigate('/login')
    }
  }, [loggedIn])

  const navigateToKataDetail = (id:number)=>{
    navigate(`/katas/${id}`)
  }
  
  return (
    <div>
      <h1>Katas Page</h1>
      <ul>
        <li onClick={()=> navigateToKataDetail(1)}>
          First Kata
        </li>
        <li onClick={()=> navigateToKataDetail(2)}>
          Second Kata
        </li>
      </ul>
    </div>
  );
};
