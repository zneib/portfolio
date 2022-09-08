import Image from 'next/image';
import imageOne from '../../../public/images/deno/deno_variables.png';
import styled from 'styled-components';

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

const DenoVariables = () => {
  return (
    <Wrapper>
      <p>Deno has a special way of handling environment variables</p>
      <p>Each time you need to access a environment variable, you will put Deno before anything else.</p>
      <ImageContainer>
        <Image src={imageOne} alt="Code Example" />
      </ImageContainer>
      <a href="https://examples.deno.land/environment-variables">Refer to this other Deno page for more examples</a>
    </Wrapper>
  )
}

export default DenoVariables