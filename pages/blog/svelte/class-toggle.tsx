import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components';
import github from '../../../public/github.svg';
import twitter from '../../../public/twitter.svg';
import imageOne from '../../../public/images/svelte/svelte-classes.png';

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

const ClassToggle: NextPage = () => {
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
        <p>Svelte has an easy built in way to toggle different class names</p>
        <p>Using the <code>class:class_name</code> syntax you can turn on / off different classes based on your logic.</p>
        <ImageContainer>
          <Image src={imageOne} alt="Code Example" placeholder="blur" />
        </ImageContainer>
        <p>Refer to the svelte documentation link below for more examples.</p>
        <hr />
        <h4>Links</h4>
        <span>&gt;<a href="https://svelte.dev/docs#template-syntax-element-directives-class-name">Class Directive</a></span>
      </Content>
    </Wrapper>
  )
}

export default ClassToggle