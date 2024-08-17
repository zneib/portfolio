import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import styled from 'styled-components';

const Page = styled.section`
  height: 100vh;
`
const PostSection = styled.section`
  margin: 0 auto;
  width: 50%;
  background-color: #fff;
  border: 2px solid var(--gray-five);
  border-radius: 5px;
  padding: 10px;
  &:hover {
    border: 2px solid var(--gray-six);
    cursor: pointer;
  }
`
const BackButton = styled.span`
  position: fixed;
  top: 20px;
  left: 20px;
  border: 2px solid black;
  padding: 5px 10px;
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
      <div style={{ textAlign: 'center', margin: '20px auto' }}>It's Bloggin' Time</div>
      <Link href="/popoverPost"><PostSection>The Popover API - <span style={{ fontSize: '12px' }}>8/16/2024</span></PostSection></Link>
      <Separator />
      <Link href="/dialogPost"><PostSection>New <code>&lt;dialog&gt;</code> Element - <span style={{ fontSize: '12px' }}>5/18/24</span></PostSection></Link>
    </Page>
  )
}

export default Blog