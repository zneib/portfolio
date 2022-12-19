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
          <h2>Home</h2>
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
      <Wrapper>
        <LeftNav>
          <NavItem><span>Svelte</span><Image src={svelte} alt="tech icon" /></NavItem>
          <NavItem><span>React</span><Image src={react} alt="tech icon" /></NavItem>
          <NavItem><span>JavaScript</span><Image src={javascript} alt="tech icon" /></NavItem>
          <NavItem><span>TypeScript</span><Image src={typescript} alt="tech icon" /></NavItem>
          <NavItem><span>Deno</span><Image src={deno} alt="tech icon" /></NavItem>
          <NavItem><span>HTML</span><Image src={html} alt="tech icon" /></NavItem>
          <NavItem><span>CSS</span><Image src={css} alt="tech icon" /></NavItem>
          <NavItem><span>Node</span><Image src={node} alt="tech icon" /></NavItem>
        </LeftNav>
        <BlogContent>
          <Link href="/blog/svelte/class-toggle">
            <BlogCard contentType="svelte" title="An easy way to toggle class names in Svelte components" month="Oct" year="2022" />
          </Link>
          <Link href="/blog/deno/variables">
            <BlogCard contentType="deno" title="How to use environment variables in your Deno apps" month="Sept" year="2022" />
          </Link>
          <Link href="/blog/javascript/atMethod">
            <BlogCard contentType="javascript" title="Finding last indexes with the array at() method" month="Sept" year="2022" />
          </Link>
          <Link href="/blog/svelte/child-binding">
            <BlogCard contentType="svelte" title="How to bind child component state and events to parent components" month="Aug" year="2022" />
          </Link>
        </BlogContent>
      </Wrapper>
    </Main>
  )
}

export default BlogHome