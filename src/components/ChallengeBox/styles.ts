import styled from 'styled-components'

export const ChallengeBoxContainer = styled.div`
    height: 100%;

    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;


export const ChallengeActive = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const EarnXp = styled.header`
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
`;

export const MainContentChallengeActive = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > strong {
        font-size: 2rem;
        font-weight: 600;
        color: var(--title);
        margin: 1.5rem 0 1rem;
    }
`;

export const TextChallenge = styled.p`
    line-height: 1.5;
`;

export const FooterContentChallengeActive = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    > button {
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        color: var(--white);

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;
        outline: none;

        :hover {
            filter: brightness(0.9);
        }
    }
`;

export const FailedButton = styled.button`
    background: var(--red);

`;

export const CompletedButton = styled.button`
    background: var(--green);

`;


export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainText = styled.strong`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
`;

export const ContentChallengeNotActive = styled.p`
    display: flex;
    flex-direction:column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    > img {
        margin-bottom: 1rem;
    }
`;