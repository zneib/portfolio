import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import twitter from '../public/twitter.svg';
import github from '../public/github.svg';

const Main = styled.main`
  background: #eee;
  width: 100%;
  height: 100vh;
  padding: 50px 100px;
  & > h3 {
    color: #000;
    margin-top: 50px;
  }
`

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  color: #000;
`

const SocialLinks = styled.div`
  & > a:nth-child(1) {
    margin-right: 20px;
  }
`

const Section = styled.section`
  color: #000;
  display: flex;
`

type Repo = {
  name: string;
  description: string;
  homepage: string;
  html_url: string;
  updated_at: string;
}

const Home: NextPage = () => {
  const [currentProjects, setCurrentProjects] = useState([]);
  const [pastProjects, setPastProjects] = useState([]);

  useEffect(() => {
    const getRepoInfo = async () => {
      const res = await fetch(`https://api.github.com/users/zneib/repos`);
      const repos = await res.json();
      if (repos) {
        const sorted = repos.sort((a: Repo, b: Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setCurrentProjects(sorted.splice(0, 3));
        setPastProjects(sorted.splice(4, 6));
      }
    }
    getRepoInfo();
  }, [])

  const technologies = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Svelte', 'Deno', 'Node']
  return (
    <Main>
      <TopSection>
        <h2>Blog</h2>
        <SocialLinks>
          <a href="https://github.com/zneib">
            <Image src={github} alt="source control" />
          </a>
          <a href="https://twitter.com/zachadackis">
            <Image src={twitter} alt="social" />
          </a>
        </SocialLinks>
      </TopSection>
      <h3>Summary</h3>
      <Section>
      </Section>
      <h3>Technologies / Frameworks</h3>
      <Section>
        {technologies.map((item, index) => (
          <SkillCard key={index} image={item.toLowerCase()} name={item} />
        ))}
      </Section>
      <h3>Current Projects</h3>
      <Section>
        {currentProjects?.length > 0 && currentProjects.map((item: Repo, index) => (
          <ProjectCard key={index} name={item.name} description={item.description} homepage={item.homepage} url={item.html_url} />
        ))}
      </Section>
      <h3>Past Projects</h3>
      <Section>
        {pastProjects?.length > 0 && pastProjects.map((item: Repo, index) => (
          <ProjectCard key={index} name={item.name} description={item.description} homepage={item.homepage} url={item.html_url} />
        ))}
      </Section>
    </Main>
  )
}

export default Home
