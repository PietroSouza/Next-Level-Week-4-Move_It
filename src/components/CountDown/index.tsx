import React, { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { MainContainer, ContainerCountDown, TimeCounter, Number, StartCountDownButton, StopCountDownButton, DisabledCountDownButton } from './styles';

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState<number>(0.1 * 60);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [hasFinished, setHasFinished] = useState<boolean>(false);

    const minutes:number = Math.floor(time / 60);
    const seconds:number = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown(){
        setIsActive(true);
    }

    function resetCountDown(){
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

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