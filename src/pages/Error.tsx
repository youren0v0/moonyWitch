import React from 'react';
import { Link } from "react-router-dom";

const Error: React.FC<any> = () => {
  return (
    <div className="Error">
      <h1>Error</h1>
      <Link to="/app">app</Link>
    </div>
  );
}
export default Error