import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { Card } from '../../common/core/components';
import { DraftSummonerProfile } from '../1_draft-summoner-profile';

// https://v4.mui.com/styles/api/#examples-2
const useStyles = makeStyles(theme => ({
    root: {

    }
}));

export interface DraftSummonerProfilesProps {
    profiles: DraftSummonerProfile[];
}

// TODO: integrated <DraftSummonerProfile> in this component based on the figma design
// https://www.figma.com/file/0OzXZgcefj9s8aTHnACJld/Junior-React-Takehome?node-id=9%3A5887
// Bonus points: Not using flex
export const DraftSummonerProfiles: React.FC<DraftSummonerProfilesProps> = ({
    profiles
}) => {
    return (
        <Card elevation='0' p={1}>
            <pre>
                {JSON.stringify(profiles, undefined, 4)}
            </pre>
        </Card>
    );
}