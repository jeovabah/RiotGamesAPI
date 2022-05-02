import axios from "axios";
import React, { useState } from "react";
import { CardGame } from "./components/CardGame";
import { CardItem } from "./components/CardItem";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./styles/styledApp";

function App() {
  const [text, setText] = useState("");
  const [dataUser , setDataUser] = useState({});

  const API_KEY = "RGAPI-af5d5193-fd07-409a-b0f7-44b6aefdaa7f";
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
        <p style={{fontWeight: 'bold'}}>Ex("Joaperi", "E painsando")</p>
        <input type="text" onChange={(e) => setText(e.target.value)}
        placeholder="Digite seu nickname ou apelido" 
         />
        <button className="buttonSubmit" onClick={dataNick}>Procurar</button>
      </div>

      

      { JSON.stringify(dataUser) !== '{}' ? 
      <> 
      <CardItem dataUser={dataUser} />  
      </>:
      <>  
      <p style={{fontWeight: "bold", fontStyle: "italic"}}>Sem Jogadores sendo buscados</p>
      </>}
      
      {/* <CardGame dataUser = {dataUser} apiMatchID = {apiMatchID}
      API_KEY = {API_KEY} /> */}
    <Footer />
    </Container>
    </>
  );
}

export default App;
