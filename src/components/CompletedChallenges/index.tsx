import React from 'react'
import { CompletedChallengesContainer, Counter, Title } from './styles';

export function CompletedChallenges() {
    return (
        <CompletedChallengesContainer>
            <Title>Desafios completos</Title>
            <Counter>5</Counter>
        </CompletedChallengesContainer>
    );
}