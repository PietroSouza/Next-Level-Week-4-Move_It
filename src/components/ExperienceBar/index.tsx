import React from 'react';
import {Header, ContainerBar} from './styles';

export function ExperienceBar() {
    return(
        <Header>
            <span>0xp</span>
            <ContainerBar>
                <div style={{width: '50%'}} />
                <span style={{ left: '50%'}}> 300xp</span>
            </ContainerBar>
            <span>600xp</span>
        </Header>
    );
}