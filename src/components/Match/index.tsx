import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Match = (props : any) => {
    const urlApiMatch = "https://americas.api.riotgames.com/lol/match/v5/matches/"
    const API_KEY = "RGAPI-86ce51d7-df30-44a7-8779-76a33ee2c6b1";
    const [participants, setParticipants] = useState([]);

    useEffect(() =>{
        axios.get(urlApiMatch + props.matchID + "?api_key=" + API_KEY)
        .then((response)=> console.log(response.data.metadata.participants))
    })
  return (
    <div>
        Partida: {props.matchID}
    </div>
  )
}
