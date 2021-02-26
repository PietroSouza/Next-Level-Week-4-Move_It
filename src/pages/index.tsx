import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { Container, ContentMain, ContentLeft, ContentRight } from '../styles/mainStyle';
import { CountDownProvider } from '../contexts/CountDownContext'

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted:number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted} 
    >
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: { 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  };
}
 