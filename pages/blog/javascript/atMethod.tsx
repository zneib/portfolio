import { NextPage } from "next";
import Image from 'next/image';
import Link from "next/link";
import styled from 'styled-components';
import imageOne from '../../../public/images/javascript/at-method.png';
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
  & > a {
    font-size: 14px;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    width: 100%;
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

const AtMethod: NextPage = () => {
  return (
    <Wrapper>
      <TopSection>
        <Link href="/blog" style={{ display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <h2 style={{ display: 'inline-block', marginLeft: '0 0 0 5px' }}>Blog</h2>
        </Link>
        <SocialLinks>
          <Link href="https://github.com/zneib">
            <Image src={github} alt="source control" />
          </Link>
          <Link href="https://twitter.com/zachadackis">
            <Image src={twitter} alt="social" />
          </Link>
        </SocialLinks>
      </TopSection>
      <Content>
        <p>Using the <code>at()</code> method to find the last item in an array:</p>
        <ImageContainer>
          <Image src={imageOne} alt="Code Example" placeholder="blur" />
        </ImageContainer>
      </Content>
    </Wrapper>
  )
}

export default AtMethod