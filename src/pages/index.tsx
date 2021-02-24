import { Container, ContentMain, ContentLeft, ContentRight } from '../styles/mainStyle';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';

import Head from 'next/head';

export default function Home() {
  return (
    <Container>
        <Head>
          <title>Início | Move It</title>
        </Head>
        <ExperienceBar />
        <ContentMain>
            <ContentLeft> 
                <Profile /> 
                <CompletedChallenges /> 
                <CountDown />
            </ContentLeft>

            <ContentRight>

            </ContentRight>
        </ContentMain>
    </Container>
  );
}
 