import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
`

const DateInfo = styled.div`
  font-size: 14px;
  margin: 0;
  text-align: center;
  flex: 1;
  color: var(--gray-eight);
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

export default function BlogCard() {

  return (
    <Wrapper>
      <DateInfo>
        <p className="month">Aug</p>
        <p className="year">2022</p>
      </DateInfo>
      <Card>
        Do some stuff
      </Card>
    </Wrapper>
  )
}