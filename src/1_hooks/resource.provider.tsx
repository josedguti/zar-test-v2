import React, { createContext, useCallback, useContext, useMemo, useState, useRef, useEffect, EffectCallback } from 'react';
import { Client, getChampionName, getRoleName, getTierDivisionName } from '../common/league';
import { ChampionId } from '../common/league/client';

interface ResourceContext {
    getChampionImage(championId: Client.ChampionId): string;
    getChampionName(championId: Client.ChampionId): string;
    getRoleName(role: Client.Role): string;
    getTierDivisionName(tier: Client.Tier, division: Client.Division): string;
}

const ResourceContext = createContext<ResourceContext>(undefined);

export const useResource = (): ResourceContext => {
    return useContext(ResourceContext);
};

export const ResourceProvider: React.FC = ({
    children
}) => {
    
    // TODO: Write a function that returns the champion image url based on the champion id
    // We use an internal cdn to return champion images e.g.: https://cdn.zargg.workers.dev/champion/1.png
     
    const getChampionImage = useCallback((championId: Client.ChampionId) => {
        let url = `https://cdn.zargg.workers.dev/champion/${championId}.png`
        return url;
    }, []);

    const context = useMemo<ResourceContext>(() => ({
        getChampionImage,
        getChampionName,
        getRoleName,
        getTierDivisionName
    }), []);

    return (
        <ResourceContext.Provider value={context}>
            {children}
        </ResourceContext.Provider>
    );
}