import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import Image from 'next/image';
import basic from '../public/blog/popovers/basic_popover.png'
import { Page, ContentWrapper, Text, TextCentered, ImageWrapper, BackButton } from '../components/SharedStyles';

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