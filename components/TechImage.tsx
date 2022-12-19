import Image from 'next/image';
import deno from '../public/deno.svg';
import svelte from '../public/svelte.svg';
import react from '../public/react.svg';
import node from '../public/node.svg';
import typescript from '../public/typescript.svg';
import javascript from '../public/javascript.svg';
import css from '../public/css.svg';
import html from '../public/html.svg';

type SkillCardProps = {
  image: string;
}

export default function SkillCard({ image }: SkillCardProps) {
  let imgSrc;
  switch (image) {
    case 'deno':
      imgSrc = deno
      break;
    case 'node':
      imgSrc = node
      break;
    case 'svelte':
      imgSrc = svelte
      break;
    case 'react':
      imgSrc = react
      break;
    case 'javascript':
      imgSrc = javascript
      break;
    case 'typescript':
      imgSrc = typescript
      break;
    case 'html':
      imgSrc = html
      break;
    case 'css':
      imgSrc = css
      break;
    default:
      break;
  }
  return <Image src={imgSrc} alt="Tech Icon" />
}