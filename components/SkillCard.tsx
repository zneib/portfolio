import Image from 'next/image';
import styled from 'styled-components';
import deno from '../public/deno.svg';
import svelte from '../public/svelte.svg';
import react from '../public/react.svg';
import node from '../public/node.svg';
import typescript from '../public/typescript.svg';
import javascript from '../public/javascript.svg';
import css from '../public/css.svg';
import html from '../public/html.svg';

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  width: auto;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 25px;
  @media (max-width: 768px) {
    margin: 5px;
  }
`
const Name = styled.span`
  margin: 0 5px;
`

type SkillCardProps = {
  image?: string;
  name: string;
}

export default function SkillCard({ image, name }: SkillCardProps) {
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
  return (
    <Card>
      <Image src={imgSrc} width="24px" height="24px" alt="Tech Icon" />
      <Name>{name}</Name>
    </Card>
  )
}