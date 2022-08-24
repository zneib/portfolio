import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  background: #fff;
  border-radius: 5px;
  width: 250px;
  height: 150px;
  margin-right: 25px;
`

type ProjectCardProps = {
  name: string;
  homepage: string;
}

export default function ProjectCard({ name, homepage }: ProjectCardProps) {
  return (
    <Card>
      <p>{name}</p>
      <a href={`https://${homepage}`}>Link</a>
    </Card>
  )
}