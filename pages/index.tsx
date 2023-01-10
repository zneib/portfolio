import { useState, useEffect, ReactElement } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import github from '../public/github.svg';
import codepen from '../public/codepen.svg';
import codesandbox from '../public/codesandbox.svg';

const TopSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  updated_at: string;
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
        const sorted = repos.sort((a: Repo, b: Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setCurrentProjects(sorted.splice(0, 3));
        setPastProjects(sorted.splice(4, 6));
      }
    }
    getRepoInfo();
  }, [])

  const technologies = [ 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Svelte', 'Deno', 'Node']
  return (
    <>
      <Head>
        <title>Zach Neibaur - Portfolio</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopSection>
        <Link href="/blog">
          <h2>Blog</h2>
        </Link>
        <SocialLinks>
          <Link href="https://github.com/zneib">
            <Image src={github} alt="source control" />
          </Link>
          <Link href="https://codepen.io/zneib/pens/public">
            <Image src={codepen} alt="quick frontend projects" />
          </Link>
          <Link href="https://codesandbox.io/dashboard/recent?workspace=98c8b503-0a70-449f-bb0a-1be0067a8634">
            <Image src={codesandbox} alt="quick react projects" />
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
        {currentProjects?.length > 0 && currentProjects?.map((item: Repo, index) => (
          <ProjectCard key={index} name={item.name} description={item.description} homepage={item.homepage} url={item.html_url} />
        ))}
      </Section>
      <h3>Hibernating Projects</h3>
      <Section>
        {pastProjects?.length > 0 && pastProjects.map((item: Repo, index) => (
          <ProjectCard key={index} name={item.name} description={item.description} homepage={item.homepage} url={item.html_url} />
        ))}
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

