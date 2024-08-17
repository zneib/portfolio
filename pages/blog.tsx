import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import styled from 'styled-components';

const Page = styled.section`
  height: 100vh;
`
const PostSection = styled.section`
  margin: 0 auto;
  width: 50%;
  border: 2px solid var(--gray-five);
  border-radius: 5px;
  padding: 10px;
  &:hover {
    border: 2px solid var(--gray-six);
    cursor: pointer;
  }
`

const Blog: NextPageWithLayout = () => {
  return (
    <Page>
      <Link href="/">
        Back
      </Link>
      <div>Blog Page</div>
      <Link href="/popoverPost"><PostSection>The Popover API - <span style={{ fontSize: '12px' }}></span>8/16/2024</PostSection></Link>
      <Link href="/dialogPost"><PostSection>New <code>&lt;dialog&gt;</code> Element - <span style={{ fontSize: '12px' }}>5/18/24</span></PostSection></Link>
    </Page>
  )
}

export default Blog