import type { NextPage } from 'next';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';

const Main = styled.main`
  background: #eee;
  width: 100%;
  height: 100vh;
  padding: 50px 100px;
  & > h3 {
    color: #000;
  }
`

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  color: #000;
`

const Section = styled.section`
  color: #000;
  display: flex;
  justify-content: space-around;
`

const Home: NextPage = () => {
  const technologies = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Svelte']
  return (
    <Main>
      <TopSection>
        <h2>Blog</h2>
        <div>
          <div>Twitter</div>
          <div>Github</div>
        </div>
      </TopSection>
      <h3>Summary</h3>
      <Section>
      </Section>
      <h3>Technologies / Frameworks</h3>
      <Section>
        {technologies.map((item, index) => (
          <SkillCard key={index} name={item} />
        ))}
      </Section>
      <h3>Current Projects</h3>
      <Section>
      </Section>
      <h3>Past Projects</h3>
      <Section>
      </Section>
    </Main>
  )
}

export default Home
