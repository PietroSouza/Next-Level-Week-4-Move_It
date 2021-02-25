import React, { useContext } from 'react'
import { CountDownContext } from '../../contexts/CountDownContext';
import { MainContainer, ContainerCountDown, TimeCounter, Number, StartCountDownButton, StopCountDownButton, DisabledCountDownButton } from './styles';

export function CountDown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountDown, 
        startCountDown 
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    return (
        <MainContainer>
            <ContainerCountDown>
                <TimeCounter>
                    <Number>{minuteLeft}</Number>
                    <Number>{minuteRight}</Number>
                </TimeCounter>
                <span>:</span>
                <TimeCounter>
                    <Number>{secondLeft}</Number>
                    <Number>{secondRight}</Number>
                </TimeCounter>
            </ContainerCountDown>

            { hasFinished ? (
                <DisabledCountDownButton 
                    disabled
                >
                    Ciclo Encerrado
                </DisabledCountDownButton>
            ) : (
                <>   
                    {isActive ? (
                        <StopCountDownButton 
                            type="button"
                            onClick={resetCountDown}
                        >
                            Abandonar Ciclo
                        </StopCountDownButton>
                    ) : (

                        <StartCountDownButton 
                            type="button"
                            onClick={startCountDown}
                        >
                            Iniciar um Ciclo
                        </StartCountDownButton>
                    )}
                </>
            )}

        </MainContainer>
    );
}