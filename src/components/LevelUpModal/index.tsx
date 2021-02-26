import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { 
    ModalContainer, 
    ModalOverlay, 
    Level, 
    CongratulationsModal, 
    TextModal, 
    CloseButton 
} from './styles';

export function LevelupModal(){
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return(
        <ModalOverlay>
            <ModalContainer>
                <Level>{level}</Level>

                <CongratulationsModal>Parabéns</CongratulationsModal>
                <TextModal>Você alcançou um novo nível</TextModal>

                <CloseButton type='button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Close"/>
                </CloseButton>
            </ModalContainer>
        </ModalOverlay>
    );
}