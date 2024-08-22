import type { NextPageWithLayout } from './_app';
import Link from 'next/link';
import Image from 'next/image';
import basic from '../public/blog/popovers/basic_popover.png'
import { Page, Title, ContentWrapper, Text, TextCentered, ImageWrapper, BackButton } from '../components/SharedStyles';

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
      <Title $underline>Popover API</Title>
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
          <Image src="https://pub-bddcd0e858fd41dcb523cf6161bdc546.r2.dev/blog/popovers/basic_popover.jpeg" width={500} height={300} alt="Basic Popover" style={{ objectFit: 'contain' }} />
        </ImageWrapper>
        <TextCentered>Try it out on <Link href="https://codepen.io/zneib/pen/MWMrLKz" target="_blank" >CodePen</Link></TextCentered>
      </ContentWrapper>
      <ContentWrapper>
        <Text>The popover attribute can have two values: auto or manual. Auto is the default. Auto also allows popovers to be "light dismissed". This means that when you click anywhere outside of the popover, it will close.</Text>
        <Text>There two differences to keep in mind when using the "manual" value on the popover attributes.</Text>
        <Text>
          <ol>
            <li>More than one popover can be show on the screen.</li>
            <li>The "light dismissed" feature that comes with the auto value will no longer work. Since multiple manual popovers can be on the screen now.</li>
          </ol>
        </Text>
      </ContentWrapper>
      <ContentWrapper>
        <Text>Multiple Manual Popovers:</Text>
        <ImageWrapper>
          <Image src="https://pub-bddcd0e858fd41dcb523cf6161bdc546.r2.dev/blog/popovers/multiple_popover.jpeg" width={500} height={300} alt="Basic Popover" style={{ objectFit: 'contain' }} />
        </ImageWrapper>
        <TextCentered>Try it out on <Link href="https://codepen.io/zneib/pen/OJevPBM?editors=1100" target="_blank" >CodePen</Link></TextCentered>
      </ContentWrapper>
    </Page>
  )
}

export default PopOverPost