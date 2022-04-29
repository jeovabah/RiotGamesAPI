import axios from "axios";
import React, { useState } from "react";
import { CardGame } from "./components/CardGame";
import { CardItem } from "./components/CardItem";
import { Header } from "./components/Header";
import { Container } from "./styles/styledApp";

function App() {
  const [text, setText] = useState("");
  const [dataUser , setDataUser] = useState({});

  const API_KEY = "RGAPI-86ce51d7-df30-44a7-8779-76a33ee2c6b1";
  const api =
    "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
  const apiMatchID = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/";
  
  

  function dataNick() {
    axios
      .get(api + text + "?api_key=" + API_KEY)
      .then((response) => setDataUser(response.data));
  }

  return (
    <>
    <Header />
    <Container>
      <div>
        <label>Nickname ou Apelido </label>
        <input type="text" onChange={(e) => setText(e.target.value)}
        placeholder="Digite seu nickname ou apelido" 
         />
        <button className="buttonSubmit" onClick={dataNick}>Procurar</button>
      </div>

      {console.log(dataUser)}

      
      <CardItem dataUser={dataUser} />
      <CardGame dataUser = {dataUser} apiMatchID = {apiMatchID}
      API_KEY = {API_KEY} />
    </Container>
    </>
  );
}

export default App;
