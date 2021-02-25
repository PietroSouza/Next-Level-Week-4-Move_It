import Head from 'next/head';
import { Container, ContentMain, ContentLeft, ContentRight } from '../styles/mainStyle';
import { CountDownProvider } from '../contexts/CountDownContext'

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <Container>
        <Head>
          <title>Início | Move It</title>
        </Head>
        <ExperienceBar />
        
        <CountDownProvider>
          <ContentMain>
              <ContentLeft> 
                  <Profile /> 
                  <CompletedChallenges /> 
                  <CountDown />
              </ContentLeft>

              <ContentRight>
                  <ChallengeBox />
              </ContentRight>
          </ContentMain>
        </CountDownProvider>
    </Container>
  );
}
 