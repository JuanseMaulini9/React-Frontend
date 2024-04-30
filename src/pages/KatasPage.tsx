import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { getAllKatas } from "../services/katasService";
import { AxiosResponse } from "axios";
import { IKata } from "../utils/types/Kata.type";


export const KatasPage = () => {
  const loggedIn = useSessionStorage("sessionJWTToken");
  const navigate = useNavigate();
  const [katas, setKatas] = useState<IKata[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/login");
    } else {
      getAllKatas(loggedIn, 2, 1)
        .then((response: AxiosResponse) => {
          if (
            response.status === 200 &&
            response.data.katas &&
            response.data.totalPages &&
            response.data.currentPage
          ) {
            console.table(response.data);

            const { katas, currentPages, totalPages } = response.data;

            setKatas(katas);
            setTotalPages(totalPages);
            setCurrentPage(currentPages);
          } else {
            throw new Error(`Error obtaining katas: ${response.data}`);
          }
        })
        .catch((error) => console.error(`[Get all katas error] ${error}`));
    }
  }, [loggedIn]);

  const navigateToKataDetail = (id: string) => {
    navigate(`/katas/${id}`);
  };

  return (
    <div>
      <h1>Katas Page</h1>
      {katas.length > 0 ? (
        <div>
         
            {katas.map((kata: IKata) => (
              <div key={kata._id}>
                <h3 onClick={()=> navigateToKataDetail(kata._id)}>{kata.name}</h3>
                <h4>{kata.description}</h4>
                <h5>Creator: {kata.creator}</h5>
                <p>Raiting: {kata.stars}/5</p>
              </div>
            ))}
          
        </div>
      ) : (
        <div>
          <h5>No katas found</h5>
        </div>
      )}
    </div>
  );
};
