import { useState, useEffect, ReactElement } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

const TopSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: #000;
  @media (prefers-color-scheme: dark) {
    color: var(--gray-ten);
  }
`

const SocialLinks = styled.div`
  & > a:nth-child(1) {
    margin-right: 20px;
  }
  & > a:nth-child(2) {
    margin-right: 20px;
  }
  & > a > svg {
    @media (prefers-color-scheme: dark) {
      fill: var(--gray-ten);
    }
  }
`

const Section = styled.section`
  color: #000;
  display: flex;
  flex-wrap: wrap;
`

const SummaryText = styled.p`
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--gray-ten);
  }
`

type Repo = {
  name: string;
  description: string;
  homepage: string;
  html_url: string;
  pushed_at: string;
}

const Home: NextPageWithLayout = () => {
  const [currentProjects, setCurrentProjects] = useState([]);
  const [pastProjects, setPastProjects] = useState([]);

  useEffect(() => {
    const getRepoInfo = async () => {
      const res = await fetch(`https://api.github.com/users/zneib/repos`, {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        }
      });
      const repos = await res.json();
      if (repos) {
        const sorted = repos.sort((a: Repo, b: Repo) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
        setCurrentProjects(sorted.splice(0, 4));
        setPastProjects(sorted.splice(4, 6));
      }
    }
    getRepoInfo();
  }, [])

  const technologies = [ 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React / Next.js', 'Svelte / SvelteKit', 'Deno', 'Node.js']

  return (
    <>
      <Head>
        <title>Zach Neibaur - Portfolio</title>
        <link rel="icon" type="image/x-icon" href="favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopSection>
        <SocialLinks>
          <Link href="https://github.com/zneib">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
            </svg>
          </Link>
          <Link href="https://codepen.io/zneib/pens/public">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
              <path d="M 25 2.8125 L 24.464844 3.15625 L 3 16.796875 L 3 33.203125 L 25 47.1875 L 47 33.203125 L 47 16.796875 Z M 25 5.1875 L 45 17.894531 L 45 32.105469 L 25 44.8125 L 5 32.105469 L 5 17.894531 Z M 24 8.128906 L 7.761719 18.449219 L 15.582031 23.871094 L 24 18.136719 Z M 26 8.128906 L 26 18.136719 L 26.4375 18.433594 L 34.417969 23.871094 L 42.238281 18.449219 Z M 22 11.769531 L 22 17.078125 L 15.59375 21.445313 L 11.375 18.519531 Z M 28 11.769531 L 38.625 18.519531 L 34.40625 21.441406 L 28 17.078125 Z M 25 19.8125 L 17.300781 25.0625 L 25 30.398438 L 25.570313 30.003906 L 32.699219 25.0625 Z M 7 20.292969 L 7 29.722656 L 13.859375 25.046875 L 12.660156 24.21875 Z M 43 20.296875 L 36.140625 25.046875 L 37.34375 25.871094 L 43 29.722656 Z M 25 22.234375 L 29.167969 25.078125 L 25 27.964844 L 20.832031 25.078125 Z M 9 24.113281 L 10.328125 25.035156 L 9 25.9375 Z M 41 24.113281 L 41 25.9375 L 39.671875 25.035156 Z M 15.574219 26.238281 L 15.003906 26.625 L 7.773438 31.558594 L 24 41.871094 L 24 32.078125 Z M 34.425781 26.238281 L 26 32.078125 L 26 41.871094 L 42.226563 31.558594 Z M 15.5625 28.667969 L 22 33.125 L 22 38.230469 L 11.40625 31.5 Z M 34.4375 28.667969 L 38.59375 31.5 L 28 38.230469 L 28 33.125 Z"/>
            </svg>
          </Link>
          <Link href="https://codesandbox.io/dashboard/recent?workspace=98c8b503-0a70-449f-bb0a-1be0067a8634">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" width="30px" height="30px">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </Link>
        </SocialLinks>
      </TopSection>
      <h3>Summary</h3>
      <Section>
        <SummaryText>Front End Engineer /  UI Specialist / Aspiring Full Stack Engineer</SummaryText>
      </Section>
      <Section>
        <SummaryText>Check out some of my GitHub projects below, or see what I build over on CodeSandbox and CodePen</SummaryText>
      </Section>
      <h3>Favorite Technologies / Frameworks</h3>
      <Section>
        {technologies.map((item, index) => (
          <SkillCard key={index} image={item.toLowerCase()} name={item} />
        ))}
      </Section>
      <h3>Active Projects</h3>
      <Section>
        {currentProjects?.length > 0 ? currentProjects?.map((item: Repo, index) => (
          <ProjectCard key={index} name={item.name} description={item.description} homepage={item.homepage} url={item.html_url} />
        )) : (
          <ProjectCard name="" description="" homepage="" url="" />
        )}
      </Section>
      <h3>Hibernating Projects</h3>
      <Section>
        {pastProjects?.length > 0 ? pastProjects.map((item: Repo, index) => (
          <ProjectCard key={index} name={item.name} description={item.description} homepage={item.homepage} url={item.html_url} />
        )) : (
          <ProjectCard name="" description="" homepage="" url="" />
        )}
      </Section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home

