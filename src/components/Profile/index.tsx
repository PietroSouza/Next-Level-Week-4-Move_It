import React from 'react'
import { Level, ProfileContainer, ProfileContent, UserName } from './styles';

export function Profile() {
    return(
        <ProfileContainer>
            <img src="https://github.com/PietroSouza.png" alt="User"/>
            <ProfileContent>
                <UserName>Gabriel Pietro de Souza</UserName>
                <Level>
                    <img src="icons/level.svg" alt="arrow_up"/>
                    Level 1
                </Level>
            </ProfileContent>
        </ProfileContainer>
    );
}