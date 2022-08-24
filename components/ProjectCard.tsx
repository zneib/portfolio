import Image from 'next/image';
import styled from 'styled-components';
import github from '../public/github.svg';

const Card = styled.div`
  position: relative;
  display: flex;
  background: #fff;
  border-radius: 5px;
  width: 250px;
  height: 150px;
  margin-right: 25px;
`

const GitLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 5px;
`

type ProjectCardProps = {
  name: string;
  homepage: string;
  url: string;
}

export default function ProjectCard({ name, homepage, url }: ProjectCardProps) {
  console.log(url)
  return (
    <Card>
      <p>Project Name: {name}</p>
      <a href={`https://${homepage}`}>Link</a>
      <GitLink href={url} onClick={(e) => console.log(e)}>
        <Image src={github} width="20px" height="20px" alt="source control" />
      </GitLink>
    </Card>
  )
}