import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

const Home: React.FC<any> = () => {
  const [state, setstate] = useState(0)
   
  useEffect(()=>{
    setstate(1)
  },[])

  return (
    <div className="Home">
      <h1>主页</h1>
      <button onClick={()=>{
        setstate(3)
      }}>console
      {state}

      </button>
      <Link to="/app">app</Link>
    </div>
  );
}
export default Home