import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Match = (props : any) => {
    const urlApiMatch = "https://americas.api.riotgames.com/lol/match/v5/matches/"
    const API_KEY = "RGAPI-e8b13aed-3e4e-40a1-82a5-641fcbd59fac";
    const [participants, setParticipants] = useState([]);

    useEffect(() =>{
        axios.get(urlApiMatch + props.matchID + "?api_key=" + API_KEY)
        .then((response)=> console.log(response.data.info.participants))
    })
  return (
    <div>
        Partida:1 {props.matchID}
    </div>
  )
}
