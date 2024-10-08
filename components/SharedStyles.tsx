import styled from 'styled-components';

const Page = styled.section`
  height: 100vh;
  height: 100dvh;
  padding-top: 25px;
`
const Title = styled.h1<{ $underline?: boolean; }>`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  text-decoration: ${props => props?.$underline ? 'underline' : 'none'};
`
const ContentWrapper = styled.div`
  margin: 20px auto;
  background-color: #fafafa;
  padding: 5px 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  @media screen and (min-width: 375px) {
    width: 80%;
  }
  @media screen and (min-width: 1080px) {
    width: 50%;
  }
`
const Text = styled.article`
  margin: 20px auto;
  width: 100%;
  letter-spacing: .2px;
  line-height: 23px;
  & > a {
    text-decoration: underline;
  }
  @media (prefers-color-scheme: dark) {
    color: #000;
  }
`
const TextCentered = styled(Text)`
  text-align: center;
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
    width: 100%;
  }
`
const BackButton = styled.span`
  margin: 20px 0 0 20px;
  border: 2px solid black;
  padding: 5px 10px;
  @media (prefers-color-scheme: dark) {
    border: 2px solid var(--gray-six);
  }
`

export { Page, Title, ContentWrapper, Text, TextCentered, ImageWrapper, BackButton }