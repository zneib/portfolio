import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import basic from '../public/blog/popovers/basic_popover.png'

const Page = styled.section`
  height: 100vh;
  padding-top: 25px;
`
const ContentWrapper = styled.div`
  width: 50%;
  margin: 20px auto;
  background-color: #fafafa;
  padding: 5px 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
`
const Text = styled.article`
  margin: 20px auto;
  width: 100%;
  letter-spacing: .2px;
  line-height: 23px;
  & > a {
    text-decoration: underline;
  }
`
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  & > img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-top: 15px;
  }
  @media screen and (max-width: 375px) {
    width: 80%;
  }
`
const TextCentered = styled.article`
  margin: 20px auto;
  width: 100%;
  line-height: 20px;
  text-align: center;
  & > a {
    text-decoration: underline;
  }
`
const BackButton = styled.span`
  margin: 20px 0 0 20px;
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
    <Page>
      <Link href="/blog">
        <BackButton>Back</BackButton>
      </Link>
      <ContentWrapper>
        <Text>One of my favorite new things in HTML has landed this year. The Popover API. I thought the <CodeSnippet codeString='dialog' /> element was already super handy, but I see myself using the Popover API even more now that it's fully supported across all browsers.</Text>
        <Text>As of April 2024 this new API is available across all major desktop and mobile browsers. So right now, we can use these new features everywhere in updated browsers.</Text>
        <Text>What makes this new API so awesome? So many times in frontend development we need to display a little bit of information to the user.
        It might be that file upload successfully, or something is missing on a form. These extra little information windows can really help add some clarity to what is happening on our pages.
        Modern frameworks and libraries have helped make these kinds of things pretty easy to bake in most of the time. But sometimes, the CSS can still be a little tricky to get right each time.</Text>
        <Text>Here's a super basic example -</Text>
      </ContentWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={basic} alt="Basic Popover" style={{ objectFit: 'contain' }} />
        </ImageWrapper>
        <TextCentered>Try it out on <Link href="https://codepen.io/zneib/pen/MWMrLKz" target="_blank" >CodePen</Link></TextCentered>
      </ContentWrapper>
    </Page>
  )
}

export default PopOverPost