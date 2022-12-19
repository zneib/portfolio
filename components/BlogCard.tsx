import Image from 'next/image';
import styled from 'styled-components';
import svelte from '../public/svelte.svg';
import deno from '../public/deno.svg';
import javascript from '../public/javascript.svg';

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: block;
    width: auto;
    margin: 10px auto;
  }
`

const DateInfo = styled.div`
  font-size: 14px;
  margin: 0;
  text-align: center;
  color: var(--gray-two);
  border-radius: 5px;
  padding: 7px 25px;
  background: transparent;
  & > p {
    margin: 0;
  }
  & > p.month {
    font-size: 18px;
    margin-bottom: 5px;
  }
  & > p.year {
    font-size: 12px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--gray-nine);
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: baseline;
    padding: 7px 0;
    & > p.year {
      margin-left: 5px;
    }
  }
`

const Card = styled.div`
  position: relative;
  color: var(--gray-two);
  background: var(--gray-nine);
  border-radius: 5px;
  padding: 20px;
  height: auto;
  margin: 20px 20px 20px 0;
  box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.1);
  flex: 6;
  &:hover {
    box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.3);
  }
  @media (max-width: 768px) {
    margin: 5px;
    min-width: 100%;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--gray-nine);
    background: var(--gray-five);
  }
`

const Icon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`

type BlogCardProps = {
  contentType: string;
  title: string;
  month: string;
  year: string;
}

export default function BlogCard({ contentType, title, month, year }: BlogCardProps) {
  let imgSrc;
  switch (contentType) {
    case 'deno':
      imgSrc = deno
      break;
    case 'svelte':
      imgSrc = svelte
      break;
    case 'javascript':
      imgSrc = javascript
      break;
    default:
      break;
  }
  return (
    <Wrapper>
      <DateInfo>
        <p className="month">{month}</p>
        <p className="year">{year}</p>
      </DateInfo>
      <Card>
        <span>{title}</span>
        <Icon>
          <Image style={{ position: 'relative'}} src={imgSrc} alt="tech used" />
        </Icon>
      </Card>
    </Wrapper>
  )
}