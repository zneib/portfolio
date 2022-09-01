import Image from 'next/image';
import imageOne from '../../../public/images/deno/deno_variables.png';

const DenoVariables = () => {
  return (
    <div>
      <p>Deno has a special way of handling environment variables</p>
      <p>Each time you need to access a environment variable, you will put Deno before anything else.</p>
      <Image src={imageOne} alt="Code Example" />
      <a href="https://examples.deno.land/environment-variables">Refer to this other Deno page for more examples</a>
    </div>
  )
}

export default DenoVariables