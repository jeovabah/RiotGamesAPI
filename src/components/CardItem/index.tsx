import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface DataUserProps {
  dataUser: {
    id?: string,
    name?: string,
    puuid?: string,
    profileIconId ?: number,
    summonerLevel?: number
  };
}

export const CardItem = (props: DataUserProps) => {
  const urlImage = "http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/"
  return (
    <div>
        <Card sx={{ width: 280, backgroundColor: "#020313" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={urlImage + props.dataUser.profileIconId + ".png"}
          alt="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div" sx={{fontSize:"1.5rem"}}>
            	{props.dataUser.name}
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{fontWeight: "bold"}}>
            Level {props.dataUser.summonerLevel}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  )
}
