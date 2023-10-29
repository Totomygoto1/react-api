import React, { useEffect, useState } from 'react';
import { FetchData } from './ServicesAvatar.js';

const TestingAPICalls = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  });

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.poster_path}</div>
      ))}
    </div>
  );
};

export default TestingAPICalls;
