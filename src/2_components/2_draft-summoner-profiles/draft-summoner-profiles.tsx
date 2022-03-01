import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { Card, Typography } from "../../common/core/components";
import { DraftSummonerProfile } from "../1_draft-summoner-profile";

// https://v4.mui.com/styles/api/#examples-2
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export interface DraftSummonerProfilesProps {
  profiles: DraftSummonerProfile[];
}

// TODO: integrated <DraftSummonerProfile> in this component based on the figma design
// https://www.figma.com/file/0OzXZgcefj9s8aTHnACJld/Junior-React-Takehome?node-id=9%3A5887
// Bonus points: Not using flex
export const DraftSummonerProfiles: React.FC<DraftSummonerProfilesProps> = ({
  profiles,
}) => {
  return (
    <>
      {profiles.map((profile) => (
        <Card elevation="1" p={1}>
          <Typography
            variant="textMain"
            paragraph
            color="textSecondary"
            mt={2.5}
            mb={2.5}
          >
            <img
              src={`https://cdn.zargg.workers.dev/champion/${profile.championId}.png`}
              alt="champion name"
            />
            <div>
              
              {profile.summonerName}
              <div>
                {profile.winrate > 50 ? (
                  <span style={{ color: "blue" }}>{profile.winrate}% wr</span>
                ) : (
                  <span>{profile.winrate}% wr</span>
                )}
              </div>
              {profile.tier} {profile.division}
              <div>{profile.gamesPlayed}</div>
            </div>
            <br />
            as {profile.role}
            <div>
              {profile.roleProfile.winrate > 50 ? (
                <span style={{ color: "blue" }}>
                  {profile.roleProfile.winrate}% wr
                </span>
              ) : (
                <span>{profile.roleProfile.winrate}% wr</span>
              )}
            </div>
            <div>
                {profile.roleProfile.kda.toFixed(2)} kda
            </div>
            <div>
                {profile.roleProfile.gamesPlayed}
            </div>
          </Typography>
        </Card>
      ))}
    </>
  );
};

// tbh it is my first time using material ui *crying*
// i can make it more customizable like instead of as top, on Ekko.
