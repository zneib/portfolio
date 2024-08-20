import styled from 'styled-components';

const Page = styled.section`
  height: 100vh;
  padding-top: 25px;
`
const Title = styled.h1`
  width: 50%;
  margin: 0 auto;
  text-align: left;
  text-decoration: underline;
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
    width: 80%;
  }
`
const BackButton = styled.span`
  margin: 20px 0 0 20px;
  border: 2px solid black;
  padding: 5px 10px;
`

export { Page, Title, ContentWrapper, Text, TextCentered, ImageWrapper, BackButton }