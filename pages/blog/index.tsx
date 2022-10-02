import { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import twitter from '../../public/twitter.svg';
import github from '../../public/github.svg';
import BlogCard from "../../components/BlogCard";
import deno from '../../public/deno.svg';
import svelte from '../../public/svelte.svg';
import react from '../../public/react.svg';
import node from '../../public/node.svg';
import typescript from '../../public/typescript.svg';
import javascript from '../../public/javascript.svg';
import css from '../../public/css.svg';
import html from '../../public/html.svg';

const Main = styled.main`
  width: 100%;
  padding: 50px 100px;
  display: inline-block;
  height: 100vh;
  & > h3 {
    color: #000;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    padding: 10px 20px;
  }
  @media (prefers-color-scheme: dark) {
    & > h3 {
      color: var(--gray-nine);
    }
  }
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

const Wrapper = styled.article`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`

const LeftNav = styled.aside`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
const NavItem = styled.div`
  margin-top: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  & > span {
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    padding: 2px 5px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    margin: 5px 5px;
  }
`

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
`

const BlogHome: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Zach Neibaur - Portfolio</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <TopSection>
        <Link href="/">
          <a>
            <h2>Home</h2>
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
      <Wrapper>
        <LeftNav>
          <NavItem><span>Svelte</span><Image src={svelte} alt="tech icon" width="15px" height="15px" /></NavItem>
          <NavItem><span>React</span><Image src={react} alt="tech icon" width="15px" height="15px" /></NavItem>
          <NavItem><span>JavaScript</span><Image src={javascript} alt="tech icon" width="15px" height="15px" /></NavItem>
          <NavItem><span>TypeScript</span><Image src={typescript} alt="tech icon" width="15px" height="15px" /></NavItem>
          <NavItem><span>Deno</span><Image src={deno} alt="tech icon" width="15px" height="15px" /></NavItem>
          <NavItem><span>HTML</span><Image src={html} alt="tech icon" width="15px" height="15px" /></NavItem>
          <NavItem><span>CSS</span><Image src={css} alt="tech icon" width="15px" height="15px" /></NavItem>
          <NavItem><span>Node</span><Image src={node} alt="tech icon" width="15px" height="15px" /></NavItem>
        </LeftNav>
        <BlogContent>
          <Link href="/blog/deno/variables">
            <a><BlogCard contentType="deno" title="How to use environment variables in your Deno apps" month="Sept" year="2022" /></a>
          </Link>
          <Link href="/blog/javascript/atMethod">
            <a><BlogCard contentType="javascript" title="Finding last indexes with the array at() method" month="Sept" year="2022" /></a>
          </Link>
          <Link href="/blog/svelte/child-binding">
            <a><BlogCard contentType="svelte" title="How to bind child component state and events to parent components" month="Aug" year="2022" /></a>
          </Link>
        </BlogContent>
      </Wrapper>
    </Main>
  )
}

export default BlogHome