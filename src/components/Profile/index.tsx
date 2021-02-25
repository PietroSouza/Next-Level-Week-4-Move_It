import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Level, ProfileContainer, ProfileContent, UserName } from './styles';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return(
        <ProfileContainer>
            <img src="https://github.com/PietroSouza.png" alt="User"/>
            <ProfileContent>
                <UserName>Gabriel Pietro de Souza</UserName>
                <Level>
                    <img src="icons/level.svg" alt="arrow_up"/>
                    Level {level}
                </Level>
            </ProfileContent>
        </ProfileContainer>
    );
}