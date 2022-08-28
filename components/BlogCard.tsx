import Image from 'next/image';
import styled from 'styled-components';
import svelte from '../public/svelte.svg';

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

export default function BlogCard() {

  return (
    <Wrapper>
      <DateInfo>
        <p className="month">Aug</p>
        <p className="year">2022</p>
      </DateInfo>
      <Card>
        <span>How to bind child component state and events to parent components</span>
        <Icon>
          <Image style={{ position: 'relative'}} src={svelte} width="25px" height="25px" alt="tech used" />
        </Icon>
      </Card>
    </Wrapper>
  )
}