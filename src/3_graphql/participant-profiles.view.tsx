import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { DraftSummonerProfiles } from '../2_components/2_draft-summoner-profiles';
import { Client } from '../common/league';
import { ParticipantProfilesQueryData, PARTICIPANT_PROFILES_QUERY } from './participant-profiles.graphql-queries';
import { GetParticipantProfilesInput } from './participant-profiles.graphql-types';

export interface Participant {
    summonerName: string;
    role?: Client.Role;
    championId?: Client.ChampionId;
}

export interface ParticipantProfilesViewProps {
    platformId: string;
    queueId: string;
    participants: Participant[]
}

export const ParticipantProfilesView: React.FC<ParticipantProfilesViewProps> = ({
    platformId,
    queueId,
    participants
}) => {
    const input: GetParticipantProfilesInput = useMemo(() => {
        return {
            platformId,
            queueId,
            participants
        }
    }, [platformId, queueId, participants]);

    // TODO: write the graphql query and enrich participants with response data to feed the profiles
    // Bonus points:
    // - loading handling
    // - error handling
    const { loading, error, data } = useQuery<ParticipantProfilesQueryData>(PARTICIPANT_PROFILES_QUERY, {
        variables: {
            input
        }
    });
    console.debug(`ParticipantProfilesView_useQuery`, loading, error, data);

    const profiles = [];

    return (
        <DraftSummonerProfiles profiles={profiles} />
    );
}