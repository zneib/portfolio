import Image from 'next/image';
import Link from "next/link";
import imageOne from '../../../public/images/deno/deno_variables.png';
import styled from 'styled-components';
import twitter from '../../../public/twitter.svg';
import github from '../../../public/github.svg';

const Wrapper = styled.div`
  padding: 50px 100px;
  height: 100vh;
  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`
const Content = styled.section`
  width: 40%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 5px;
  padding: 25px;
  background-color: rgba(255,255,255, 0.5);
  box-shadow: 0px 4px 12px 2px rgba(0,0,0,0.2);
  & > hr {
    width: 100%;
    border: 0.5px solid var(--gray-seven);
  }
  & > span > a {
    font-size: 14px;
    padding-left: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-four);
  }
`
const ImageContainer = styled.div`
  width: 100%;
  margin: 25px auto;
`
const SocialLinks = styled.div`
  & > a:nth-child(1) {
    margin-right: 20px;
  }
`

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (prefers-color-scheme: dark) {
    color: var(--gray-ten);
  }
`

export default function DenoVariables() {
  return (
    <Wrapper>
      <TopSection>
        <Link href="/blog">
          <a style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <h2 style={{ display: 'inline-block', marginLeft: '0 0 0 5px' }}>Blog</h2>
          </a>
        </Link>
        <SocialLinks>
          <a href="https://github.com/zneib">
            <Image src={github} alt="source control" />
          </a>
          <a href="https://twitter.com/zachadackis">
            <Image src={twitter} alt="social" />
          </a>
        </SocialLinks>
      </TopSection>
      <Content>
        <p>Deno has a special way of handling environment variables</p>
        <p>Each time you need to access a environment variable, you will put Deno before anything else.</p>
        <ImageContainer>
          <Image src={imageOne} alt="Code Example" placeholder="blur" />
        </ImageContainer>
        <hr />
        <h4>Links</h4>
        <span>&gt;<a href="https://examples.deno.land/environment-variables">Deno Variables</a></span>
      </Content>
    </Wrapper>
  )
}