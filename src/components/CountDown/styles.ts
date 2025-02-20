import styled from 'styled-components'

export const MainContainer = styled.div`
    > button {
        width: 100%;
        height: 5rem;

        margin-top: 2rem;

        display:flex;
        align-items: center;
        justify-content: center;

        border:0;
        outline:none;
        border-radius: 5px;

        font-size: 1.25rem;
        font-weight: 600;
    }
`;

export const ContainerCountDown = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);

    > span {
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }
`;

export const TimeCounter = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
`;

export const Number = styled.span`
    flex: 1;

    :first-child {
        border-right:1px solid #f0f1f3;
    }

    :last-child {
        border-left:1px solid #f0f1f3;
    }
`;

export const StartCountDownButton = styled.button`
    background: var(--blue);
    color: var(--white);

    transition: background-color 0.2s;

    :hover {
        background: var(--blue-dark);
    }
`;

export const StopCountDownButton = styled.button`
    background: var(--white);
    color: var(--title);

    transition: background-color 0.2s;

    :hover {
        background: var(--red);
        color: var(--white);
    }
`;

export const DisabledCountDownButton = styled.button`
    cursor: not-allowed;

    background: var(--white);
    color: var(--text);
`;