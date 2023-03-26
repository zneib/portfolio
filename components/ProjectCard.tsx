import { useState, useEffect } from 'react';
import Image from 'next/image';
import TechImage from './TechImage';
import styled from 'styled-components';
import github from '../public/github.svg';
import link from '../public/link.svg';

const Card = styled.div`
  position: relative;
  color: var(--gray-two);
  background: var(--gray-nine);
  border-radius: 5px;
  min-width: 250px;
  max-width: 350px;
  padding: 5px 20px 5px 10px;
  height: 150px;
  margin: 0 20px 20px 0;
  box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.1);
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

const Name = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  margin: 0;
`

const Description = styled.p`
  font-size: 12px;
  margin-top: 10px;
  font-style: italic;
`

const PageLink = styled.a`
  position: absolute;
  top: 5px;
  right: 5px;
`

const GitLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 5px;
`

const LanguageRow = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  display: flex;
`

type ProjectCardProps = {
  name: string;
  description: string;
  homepage: string;
  url: string;
}

export default function ProjectCard({ name, description, homepage, url }: ProjectCardProps) {
  const [languages, setLanguages] = useState<string[]>([]);
  useEffect(() => {
    const getLanguageInfo = async () => {
      const res = await fetch(`https://api.github.com/repos/zneib/${name}/languages`, {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        }
      })
      const langInfo = await res.json();
      setLanguages(Object.keys(langInfo));
    }
    getLanguageInfo();
  }, [name])

  if (!name) {
    return (
      <Card>
        Loading Projects...
      </Card>
    )
  } else {
    return (
      <Card>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <LanguageRow>
          {languages?.length > 0 && languages.map((lang, index) => (
            <TechImage key={index} image={lang.toLowerCase()} />
          ))}
        </LanguageRow>
        {homepage && (<PageLink href={`https://${homepage}`}>
          <Image src={link} alt="project page" />
        </PageLink>
        )}
        <GitLink href={url}>
          <Image src={github} alt="source control" />
        </GitLink>
      </Card>
    )
  }
}