import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  width: 100px;
  border: none;
  border-radius: 5px;
  padding: 5px;
`

type SkillCardProps = {
  image?: string;
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <Card>
      {name}
    </Card>
  )
}