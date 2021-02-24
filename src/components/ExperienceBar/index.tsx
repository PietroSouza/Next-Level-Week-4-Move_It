import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {Header, ContainerBar} from './styles';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <Header>
            <span>0xp</span>
            <ContainerBar>
                <div style={{width: `${percentToNextLevel}%`}} />
                <span style={{ left: `${percentToNextLevel}%`}}> {currentExperience}xp</span>
            </ContainerBar>
            <span>{experienceToNextLevel}xp</span>
        </Header>
    );
}