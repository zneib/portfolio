import { NextPage } from "next";
import Image from 'next/image';
import styled from 'styled-components';
import imageOne from '../../../public/images/javascript/at-method.png';

const Nav = styled.nav`
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`
const ImageContainer = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
`

const AtMethod: NextPage = () => {
  return (
    <Wrapper>
      <div>Using the <code>at()</code> to find the last item in an array:</div>
      <ImageContainer>
        <Image src={imageOne} alt="Code Example" />
      </ImageContainer>
    </Wrapper>
  )
}

export default AtMethod