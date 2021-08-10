import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import styled,{keyframes} from "styled-components";
import left from "../static/img/welcomeLeft.png";
import right from "../static/img/welcomeRight.png";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Home: React.FC<any> = () => {
  const [state, setstate] = useState(0)

  useEffect(() => {
    setstate(1)
  }, [])

  return (
    <HomeBox>
      <Header>
      <Welcome>
        <Img src={left}/>
        
                <Title>
          欢迎来到
          {/* <Name>祝悦</Name>
          的简历盒 */}
        </Title>
        <Img src={right}/>
      </Welcome>
      {/* <NextPageBtn>
        <div>点击查看更多</div>
      <ArrowDownwardIcon/>
      </NextPageBtn> */}
      
      <Link to="/app">
        <Button onClick={() => {
          setstate(3)
        }}>console
          {state}

        </Button>
      </Link>
      </Header>
      <Content>

      </Content>
    </HomeBox>
  );
}
export default Home
const welcomeanimation = keyframes`
  0%   {}
  100% {transform: translateY(-100vh);}
`;

const HomeBox = styled.div`
  background-color: #aecbd9;
  // color: #3948b1;
  color: #fff;
  height:100vh;
  width:100vw;
`
const Welcome = styled.div`
  text-align:center;
  padding: 20vh 0 ;
  margin:0 auto;
  width:100vw;
  animation: ${welcomeanimation} 2s ease 3s 1 forwards ;
`
const Title = styled.span`
  background:#F26D7D;
  text-align:center;
  margin:0 auto;
  width:435px;
  font-size:36px;
  display:inline-block;
  height:190px;
  line-height:190px;
  vertical-align: top;
`
const Name = styled.span`
  margin:0 20px;
  font-size:40px;
  font-weight: 600;
`
const Img = styled.img`
  vertical-align: top;
`
const Header = styled.div`
  height:100vh;
  width:100vw;
`
const NextPageBtn = styled.div`
  text-align:center;
  margin:0 auto;
  color: #fff;
  font-size:20px;
`
const Content = styled.div`
  height:100vh;
  width:100vw;
`
