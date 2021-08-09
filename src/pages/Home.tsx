import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import left from "../static/img/welcomeLeft.png";
import right from "../static/img/welcomeRight.png";
// const left = require("../static/img/welcomeLeft.png");
// const right = require("../static/img/welcomeRight.png");

const Home: React.FC<any> = () => {
  const [state, setstate] = useState(0)

  useEffect(() => {
    setstate(1)
  }, [])

  return (
    <HomeBox>
      <Welcome>
        <Img src={left}/>
        
                <Title>
          欢迎来到
          {/* <Name>祝悦</Name>
          的简历盒 */}
        </Title>
        <Img src={right}/>
      </Welcome>

      <Link to="/app">
        <Button onClick={() => {
          setstate(3)
        }}>console
          {state}

        </Button>
      </Link>
    </HomeBox>
  );
}
export default Home

const HomeBox = styled.div`
  background-color: #aecbd9;
  // color: #3948b1;
  color: #fff;
  height:100vh;
  width:100vw;
`
const Welcome = styled.div`
  text-align:center;
  margin:0 auto;
  width:100vw;
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
