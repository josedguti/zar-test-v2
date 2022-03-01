import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { useResource } from "../../1_hooks/resource.provider";
import { Card, Typography } from "../../common/core/components";
import { Client, isChampionIdValid, isRoleValid } from "../../common/league";
import { ChampionId } from "../../common/league/client";

// https://v4.mui.com/styles/api/#examples-2
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export interface Profile {
  gamesPlayed: number;
  winrate: number;
  kda: number;
}

export interface DraftSummonerProfile {
  summonerName: string;
  gamesPlayed?: number;
  winrate?: number;

  tier?: Client.Tier;
  division?: Client.Division;

  role?: Client.Role;
  roleProfile?: Profile;

  championId?: Client.ChampionId;
  championProfile?: Profile;
}

export interface DraftSummonerProfileProps {
  profile: DraftSummonerProfile;
}

// TODO: implement component based on the figma design
// https://www.figma.com/file/0OzXZgcefj9s8aTHnACJld/Junior-React-Takehome?node-id=6%3A605
// Notes:
// - winrate >= 50 -> positive

export const DraftSummonerProfile: React.FC<DraftSummonerProfileProps> = ({
  profile: {
    summonerName,
    winrate,
    gamesPlayed,

    tier,
    division,

    role,
    roleProfile,

    championId,
    championProfile,
  },
}) => {
  const classes = useStyles();

  const {
    getChampionName,
    getChampionImage,
    getRoleName,
    getTierDivisionName,
  } = useResource();

  const hasRole = isRoleValid(role);
  const hasChampion = isChampionIdValid(championId);

  return (
    <>
      <Card elevation="1" p={1}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
          <img src="https://cdn.zargg.workers.dev/champion/-1.png" alt="champion image" />
          {summonerName}
          <br />
          <p>no data</p>
        </Typography>
      </Card>
      <Card elevation="1" p={2}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
            <img src="https://cdn.zargg.workers.dev/champion/-1.png" alt="champion image" />
          {summonerName} as {role}
          <br />
          no data         no data
        </Typography>
      </Card>
      <Card elevation="1" p={2}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
            <img src="https://cdn.zargg.workers.dev/champion/245.png" alt="champion image" />
          {summonerName} on Ekko
          <br />
          no data         no data
        </Typography>
      </Card>
      <Card elevation="1" p={2}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
            <img src="https://cdn.zargg.workers.dev/champion/-1.png" alt="champion image" />
          {summonerName} 
          <br />
          <span style={{color: 'blue'}}>{winrate}%</span> wr
          <br />
          {tier} {division}
          <br />
          {gamesPlayed}
        </Typography>
      </Card>
      <Card elevation="1" p={2}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
            <img src="https://cdn.zargg.workers.dev/champion/-1.png" alt="champion image" />
            <br />
          {summonerName} 
          <br />
          <span style={{color: 'blue'}}>{winrate}%</span> wr
          <br />
          {tier} {division}
          <br />
          {gamesPlayed}
          <br />
          as {role} {roleProfile.winrate}% wr 
          <br />
          {roleProfile.kda} kda
          <br />
          {roleProfile.gamesPlayed} games
        </Typography>
      </Card>
      <Card elevation="1" p={2}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
            <img src="https://cdn.zargg.workers.dev/champion/245.png" alt="champion image" />
            <br />
          {summonerName} 
          <br />
          <span style={{color: 'blue'}}>{winrate}%</span> wr
          <br />
          {tier} {division}
          <br />
          {gamesPlayed}
          <br />
          on Ekko <span style={{color: 'blue'}}>51.2%</span> wr 
          <br />
          2.4 kda
          <br />
          12 games
        </Typography>
      </Card>
    </>
  );
};


// championProfile.winrate/kda/gamesPlayed was giving error of undefined thats why I typed them manually
