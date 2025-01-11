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
import swift from '../public/swift.svg';

const Card = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray-two);
  background: var(--gray-nine);
  width: auto;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px 25px 0 0;
  @media (max-width: 768px) {
    margin: 5px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--gray-nine);
    background: var(--gray-five);
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
    case 'node.js':
      imgSrc = node
      break;
    case 'svelte / sveltekit':
      imgSrc = svelte
      break;
    case 'react / next.js':
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
    case 'swift / swiftui':
      imgSrc = swift
      break;
    default:
      break;
  }
  return (
    <Card>
      <Image src={imgSrc} alt="Tech Icon" />
      <Name>{name}</Name>
    </Card>
  )
}