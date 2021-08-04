import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC<any> = () => {
  return (
    <div className="Home">
      <h1>主页</h1>
      <Link to="/app">应用1</Link>
    </div>
  );
}
export default Home