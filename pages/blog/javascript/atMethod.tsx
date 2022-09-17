import { NextPage } from "next";
import Image from 'next/image';
import Link from "next/link";
import styled from 'styled-components';
import imageOne from '../../../public/images/javascript/at-method.png';
import twitter from '../../../public/twitter.svg';
import github from '../../../public/github.svg';

const Wrapper = styled.div`
  display: flex;
  padding: 50px 100px;
  height: 100vh;
`
const Content = styled.section`
  flex: 1;
  width: 100%;
  padding-top: 50px;
`
const ImageContainer = styled.div`
  width: 500px;
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

const LeftSection = styled.div`
  flex: 1;
`
const RightSection = styled.div`
  flex: 1;
  text-align: right;
`

const AtMethod: NextPage = () => {
  return (
    <Wrapper>
      <LeftSection>
      <Link href="/blog">
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <h2 style={{ display: 'inline-block', margin: '0 0 0 5px' }}>Blog</h2>
        </a>
      </Link>
      </LeftSection>
      <Content>
        <p>Using the <code>at()</code> method to find the last item in an array:</p>
        <ImageContainer>
          <Image src={imageOne} alt="Code Example" />
        </ImageContainer>
      </Content>
      <RightSection>
        <SocialLinks>
          <a href="https://github.com/zneib">
            <Image src={github} alt="source control" />
          </a>
          <a href="https://twitter.com/zachadackis">
            <Image src={twitter} alt="social" />
          </a>
        </SocialLinks>
      </RightSection>
    </Wrapper>
  )
}

export default AtMethod