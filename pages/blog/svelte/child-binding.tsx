import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components';
import github from '../../../public/github.svg';
import twitter from '../../../public/twitter.svg';
import arrow from '../../../public/chevron-left.svg';

const Wrapper = styled.div`
  padding: 50px 100px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`
const ImageContainer = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
`
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
`

const ChildBinding: NextPage = () => {
  return (
    <Wrapper>
    <TopSection>
      <Link href="/blog">
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <h2 style={{ display: 'inline-block', marginLeft: '5px' }}>Blog</h2>
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
      <div>First svelte post</div>
      <ImageContainer>
        {/* <Image src={imageOne} alt="Code Example" /> */}
      </ImageContainer>
    </Content>
  </Wrapper>
  )
}

export default ChildBinding