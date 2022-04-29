import axios from "axios";
import React, { useEffect, useState } from "react";
import { Match } from "../Match";

interface DataUserProps {
  API_KEY: string;
  apiMatchID: string;
  dataUser: {
    id?: string;
    name?: string;
    puuid?: string;
    profileIconId?: number;
    summonerLevel?: number;
  };
}
export const CardGame = (props: DataUserProps) => {
  const [match, setMatch] = useState([]);

  const apiMatch = "https://americas.api.riotgames.com/lol/match/v5/matches/";

  function searchMatchID() {
    axios
      .get(
        props.apiMatchID +
          props.dataUser.puuid +
          "/ids?api_key=" +
          props.API_KEY
      )
      .then((response) => setMatch(response.data));
  }

  
  return (
    <section>
      <button style={{backgroundColor:"#456", padding: "1rem", border:"none",
      borderRadius:"5px", margin:"1rem", color: "#fff", fontWeight: "bold"
    }} onClick={searchMatchID}>Procurar Partida</button>

      <ul>
          { match.map((matchID, index)=>{
              return (
                  <li key={index}>
                      <Match matchID={matchID} />
                  </li>
              )
          }) }
      </ul>
    </section>
  );
};
