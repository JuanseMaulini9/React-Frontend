import { useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { useEffect, useState } from "react";
import { Editor } from "../components/editor/Editor";
import { IKata } from "../utils/types/Kata.type";
import { getKataById } from "../services/katasService";
import { AxiosResponse } from "axios";
export const KatasDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loggedIn = useSessionStorage("sessionJWTToken");
  const [kata, setKata] = useState<IKata>();
  const [showSolution, setShowSolution] = useState(false)
  useEffect(() => {
    if (!loggedIn) {
      return navigate("/login");
    } else {
      if (id) {
        getKataById(loggedIn, id)
          .then((response: AxiosResponse) => {
            if (response.status === 200 && response.data) {
              const kataData: IKata = {
                _id: response.data._id,
                name: response.data.name,
                description: response.data.description,
                stars: response.data.stars,
                level: response.data.level,
                intents: response.data.intents,
                creator: response.data.creator,
                participants: response.data.participants,
                solution: response.data.solution
              };
              setKata(kataData)
              
            }
          })
          .catch((error) => console.error(`[Kata by id error]: ${error}`));
      } else {
        return navigate("/katas");
      }
    }
  }, [loggedIn]);

  return (
    <div>
      <h1>Kata Detail Page: {id}</h1>
      {kata ? 
      <div className="kata-data">
        <h2>{kata?.description}</h2>
        <h3>Raiting: {kata.stars}/5</h3>
        <button onClick={()=>setShowSolution(!showSolution)}>{showSolution ? 'Hide Solution' :'Show Solution'}</button>
      {
        showSolution ? <Editor solution={kata?.solution} lenguage="tsx"></Editor> : null
      }
      </div>
      : 
      <div>
        <h2>
          Loading data...
        </h2>
      </div>
      }

      
     
    </div>
  );
};
