import { gql, useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import { DraftSummonerProfiles } from "../2_components/2_draft-summoner-profiles";
import { Client } from "../common/league";
import {
  ParticipantProfilesQueryData,
  PARTICIPANT_PROFILES_QUERY,
} from "./participant-profiles.graphql-queries";
import { GetParticipantProfilesInput } from "./participant-profiles.graphql-types";

export interface Participant {
  summonerName: string;
  role?: Client.Role;
  championId?: Client.ChampionId;
}

export interface ParticipantProfilesViewProps {
  platformId: string;
  queueId: string;
  participants: Participant[];
}

export const ParticipantProfilesView: React.FC<ParticipantProfilesViewProps> =
  ({ platformId, queueId, participants }) => {
    const input: GetParticipantProfilesInput = useMemo(() => {
      return {
        platformId,
        queueId,
        participants,
      };
    }, [platformId, queueId, participants]);
    // TODO: write the graphql query and enrich participants with response data to feed the profiles
    // Bonus points:
    // - loading handling
    // - error handling
    const getProfileData = gql`
      query {
        ParticipantProfile {
          summonerName
        }
      }
    `;

    const { loading, error, data } = useQuery<ParticipantProfilesQueryData>(
      PARTICIPANT_PROFILES_QUERY,
      {
        variables: {
          input,
        },
        errorPolicy: "all",
      }
    );

    // i keep getting the cannot read properties undefined (reading 'winrate') couldnt find a solution for that

    if (loading) {
      return <span>loading...</span>;
    }

    if (error) {
      return <span>{error.message}</span>;
    }

    console.log(`ParticipantProfilesView_useQuery`, loading, error, data);
    let profiles = [];
    if (data) {
      profiles = [data.getParticipantProfiles];
    }
    console.log(profiles);

    return <DraftSummonerProfiles profiles={profiles} />;
  };
