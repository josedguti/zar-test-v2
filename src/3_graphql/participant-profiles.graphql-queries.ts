import { gql } from '@apollo/client';
import { ParticipantProfile } from './participant-profiles.graphql-types';

export interface ParticipantProfilesQueryData {
    getParticipantProfiles: ParticipantProfile[];
}

export const PARTICIPANT_PROFILES_QUERY = gql`
    query PARTICIPANT_PROFILES_QUERY{
        PARTICIPANTS {
            summonerName
            championId
            role
        }
    }
`;

// got stuck with the .map error of winrate coming from draftsummonerprofiles..it is weird!