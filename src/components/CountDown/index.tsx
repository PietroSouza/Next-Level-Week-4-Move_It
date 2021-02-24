import React, { useState, useEffect } from 'react'
import { MainContainer, ContainerCountDown, TimeCounter, Number, StartCountDownButton } from './styles';

export function CountDown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown(){
        setActive(true);
    }

    useEffect(() => {
        if(active && time > 0){
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time]);

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

            <StartCountDownButton 
                type="button"
                onClick={startCountDown}
            >
                Iniciar um Ciclo
            </StartCountDownButton>
        </MainContainer>
    );
}