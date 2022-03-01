import makeStyles from "@material-ui/core/styles/makeStyles";
import { argsToArgsConfig } from "graphql/type/definition";
import React from "react";
import { useResource } from "../../1_hooks/resource.provider";
import { Card, Typography } from "../../common/core/components";
import { Client, isChampionIdValid, isRoleValid } from "../../common/league";
import { ChampionId } from "../../common/league/client";
import { DataNoRoleNoChampion, DataRoleChampion, DataRoleNoChampion, NoDataNoRoleNoChampion, NoDataRoleChampion, NoDataRoleNoChampion } from "./draft-summoner-profile.stories";

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
          <img
            src={`https://cdn.zargg.workers.dev/champion/${championId}.png`}
            alt="champion image"
          />
          <div>{NoDataNoRoleNoChampion.args.profile.summonerName}</div>
          <div>no data</div>
        </Typography>
      </Card>
      <Card elevation="1" p={1}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
          <img
            src={`https://cdn.zargg.workers.dev/champion/${championId}.png`}
            alt="champion image"
          />
          <div>{NoDataNoRoleNoChampion.args.profile.summonerName}</div>
          <div>no data</div>
          <br />
          <div>as {NoDataRoleNoChampion.args.profile.role}</div>
          <div>no data</div>
        </Typography>
      </Card>
      <Card elevation="1" p={1}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
          <img
            src={`https://cdn.zargg.workers.dev/champion/${NoDataRoleChampion.args.profile.championId}.png`}
            alt="champion image"
          />
          <div>{NoDataNoRoleNoChampion.args.profile.summonerName}</div>
          <div>no data</div>
          <br />
          <div>as Ekko</div>
          <div>no data</div>
        </Typography>
      </Card>
      <Card elevation="1" p={1}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
          <img
            src={`https://cdn.zargg.workers.dev/champion/${championId}.png`}
            alt="champion image"
          />
          <div>{NoDataNoRoleNoChampion.args.profile.summonerName}</div>
          <div>{DataNoRoleNoChampion.args.profile.winrate}% wr</div>
          <div>{DataNoRoleNoChampion.args.profile.tier} {DataNoRoleNoChampion.args.profile.division}</div>
          <div>{DataNoRoleNoChampion.args.profile.gamesPlayed} games</div>
          
        </Typography>
      </Card>
      <Card elevation="1" p={1}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
          <img
            src={`https://cdn.zargg.workers.dev/champion/${championId}.png`}
            alt="champion image"
          />
          <div>{NoDataNoRoleNoChampion.args.profile.summonerName}</div>
          <div>{DataNoRoleNoChampion.args.profile.winrate}% wr</div>
          <div>{DataNoRoleNoChampion.args.profile.tier} {DataNoRoleNoChampion.args.profile.division}</div>
          <div>{DataNoRoleNoChampion.args.profile.gamesPlayed} games</div>
          <br />
          <div>as {DataRoleNoChampion.args.profile.role}</div>
          <div>{DataRoleNoChampion.args.profile.roleProfile.winrate}% wr</div>
          <div>{DataRoleNoChampion.args.profile.roleProfile.kda} kda</div>
          <div>{DataRoleNoChampion.args.profile.roleProfile.gamesPlayed} games</div>
        </Typography>
      </Card>
      <Card elevation="1" p={1}>
        <Typography
          variant="textMain"
          paragraph
          color="textSecondary"
          mt={2.5}
          mb={2.5}
        >
          <img
            src={`https://cdn.zargg.workers.dev/champion/${NoDataRoleChampion.args.profile.championId}.png`}
            alt="champion image"
          />
          <div>{NoDataNoRoleNoChampion.args.profile.summonerName}</div>
          <div>{DataNoRoleNoChampion.args.profile.winrate}% wr</div>
          <div>{DataNoRoleNoChampion.args.profile.tier} {DataNoRoleNoChampion.args.profile.division}</div>
          <div>{DataNoRoleNoChampion.args.profile.gamesPlayed} games</div>
          <br />
          <div>as Ekko</div>
          <div>{DataRoleChampion.args.profile.championProfile.winrate}% wr</div>
          <div>{DataRoleChampion.args.profile.championProfile.kda} kda</div>
          <div>{DataRoleChampion.args.profile.championProfile.gamesPlayed} games</div>
        </Typography>
      </Card>
    </>
  );
};

// championProfile.winrate/kda/gamesPlayed was giving error of undefined thats why I typed them manually
