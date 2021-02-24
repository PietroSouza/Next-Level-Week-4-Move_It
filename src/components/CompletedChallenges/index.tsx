import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CompletedChallengesContainer, Counter, Title } from './styles';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <CompletedChallengesContainer>
            <Title>Desafios completos</Title>
            <Counter>{challengesCompleted}</Counter>
        </CompletedChallengesContainer>
    );
}