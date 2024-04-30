import { useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { useEffect } from "react";
import { Editor } from "../components/editor/Editor";

export const KatasDetailPage = () => {
  
  const {id} = useParams()
  const navigate = useNavigate()
  const loggedIn = useSessionStorage('sessionJWTToken')

  useEffect(()=>{
    if(!loggedIn){
      return navigate('/login')
    }
  }, [loggedIn])

  const codeBlock = `
  const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
    return (
      <div>
        <h2>{item.name}</h2>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    );
  }
  `

  return (
    <div>
      <h1>Kata Detail Page: {id}</h1>
      <Editor children={codeBlock} lenguage="tsx"></Editor>
    </div>
  );
};
