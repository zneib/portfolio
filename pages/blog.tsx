import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import styled from 'styled-components';
import { BackButton } from '../components/SharedStyles';

const Page = styled.section`
  height: 100vh;
  height: 100dvh;
  padding-top: 25px;
`
const PostWrapper = styled.section`
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    width: 80%;
  }
  @media screen and (min-width: 1080px) {
    width: 50%;
  }
`
const PostInfo = styled.div`
  margin: 0 auto;
  background-color: #fff;
  border: 2px solid var(--gray-five);
  border-radius: 5px;
  padding: 10px;
  &:hover {
    border: 2px solid var(--gray-six);
    cursor: pointer;
  }
  @media (prefers-color-scheme: dark) {
    background-color: var(--gray-five);
    border: 2px solid var(--gray-seven);
  }
`

const Separator = () => {
  return <div style={{ margin: '15px 0' }}></div>
}

const Blog: NextPageWithLayout = () => {
  return (
    <Page>
      <Link href="/">
        <BackButton>Back</BackButton>
      </Link>
      <PostWrapper>
        <div style={{ textAlign: 'center', margin: '20px auto' }}>Guides</div>
      </PostWrapper>
    </Page>
  )
}

export default Blog