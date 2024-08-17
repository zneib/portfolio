import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import styled from 'styled-components';

const Text = styled.article`
  margin: 20px auto;
  width: 50%;
  line-height: 20px;
`
const CodeSnippet = () => {
  return <code>&lt;dialog&gt;</code>
}

const DialogPost: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/blog">
        Back
      </Link>
      <Text>In the year of writing this, I wouldn't say the <code>&lt;dialog&gt;</code> element is the brand new shiny thing out for the web. Nevertheless, I wanted to write about it, and 
      and bring more attention to it. If you write a lot of frontend code and are constantly trying to build the perfect modal or alert, this new element is a life changer.</Text>
      <Text>Part of what made building a custom modal so tricky, was nailing down all the correct CSS and accompanying JavaScript bits. JavaScript is still required here, but the CSS plays a much simpler role.</Text>
      <Text>There's two different options when creating a <CodeSnippet /> element. Modal <CodeSnippet /> elements, and non-modal <CodeSnippet /> elements.</Text>

    </>
  )
}

export default DialogPost