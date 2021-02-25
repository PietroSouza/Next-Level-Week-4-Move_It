import React, { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountDownContext } from '../../contexts/CountDownContext';
import { ChallengeBoxContainer, ChallengeNotActive, MainText, ContentChallengeNotActive, ChallengeActive, EarnXp, MainContentChallengeActive, TextChallenge, FooterContentChallengeActive, FailedButton, CompletedButton } from './styles';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountDownContext);

    function HandleChallengeCompleted() {
        completeChallenge();
        resetCountDown();
    }

    function HandleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return (
        <ChallengeBoxContainer>
           { activeChallenge ? (
                <ChallengeActive>
                    <EarnXp>Ganhe {activeChallenge.amount} xp</EarnXp>
                    <MainContentChallengeActive>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Level Up"/>
                        <MainText>Novo Desafio</MainText>
                        <TextChallenge>{activeChallenge.description}</TextChallenge>
                    </MainContentChallengeActive>

                    <FooterContentChallengeActive>
                        <FailedButton type="button" onClick={HandleChallengeFailed}>Falhei</FailedButton>
                        <CompletedButton type="button" onClick={HandleChallengeCompleted}>Completei</CompletedButton>
                    </FooterContentChallengeActive>
                </ChallengeActive>
           ) : (
                <ChallengeNotActive>
                    <MainText>Finalize um ciclo para receber novos desafios!</MainText>
                    <ContentChallengeNotActive>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </ContentChallengeNotActive>
                </ChallengeNotActive>
           ) }
        </ChallengeBoxContainer>
    );
}