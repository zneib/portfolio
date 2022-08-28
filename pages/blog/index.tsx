import { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import twitter from '../../public/twitter.svg';
import github from '../../public/github.svg';
import BlogCard from "../../components/BlogCard";

const Main = styled.main`
  width: 100%;
  padding: 50px 100px;
  display: inline-block;
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
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Main>
  )
}

export default BlogHome