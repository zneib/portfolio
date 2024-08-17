import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import basic from '../public/blog/popovers/basic_popover.png'

const Text = styled.article`
  margin: 20px auto;
  width: 50%;
  line-height: 20px;
  & > a {
    text-decoration: underline;
  }
`
const BackButton = styled.span`
  position: fixed;
  top: 20px;
  left: 20px;
  border: 2px solid black;
  padding: 5px 10px;
`
type CodeSnippetProps = {
  codeString: string;
}
const CodeSnippet = ({ codeString }: CodeSnippetProps) => {
  return <code>&lt;{codeString}&gt;</code>
}

const PopOverPost: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/blog">
        <BackButton>Back</BackButton>
      </Link>
      <Text>One of my favorite new things in HTML has landed this year. The Popover API. I thought the <CodeSnippet codeString='dialog' /> element was already super handy, but I see myself using the Popover API even more now that it's fully supported across all browsers.</Text>
      <Text>As of April 2024 this new API is available across all major desktop and mobile browsers. So right now, we can use these new features everywhere in updated browsers.</Text>
      <Text>What makes this new API so awesome? So many times in frontend development we need to display a little bit of information to the user.
      It might be that file upload successfully, or something is missing on a form. These extra little information windows can really help add some clarity to what is happening on our pages.
      Modern frameworks and libraries have helped make these kinds of things pretty easy to bake in most of the time. But sometimes, the CSS can still be a little tricky to get right each time.</Text>

      <Text>Here's a super basic example -</Text>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image width={800} src={basic} alt="Basic Popover" />
      </div>
      <Text>Here is a very basic example of how it works <Link href="https://codepen.io/zneib/pen/MWMrLKz" target="_blank" >CodePen</Link></Text>

    </>
  )
}

export default PopOverPost