import React, { useState, useEffect } from "react";

const Test = () => {
  const [allhomes, setAllhomes] = useState([]);

  const fetchAllHomes = async () => {
    const res = await fetch("http://localhost:5050/home/");
    const data = await res.json();
    setAllhomes(data);
    console.log("data...", data);
  };

  useEffect(() => {
    fetchAllHomes(); //eslint-disable-next-line
  }, []);

  return (
    <div>
      data from server
      {allhomes.map((home) => (
        <h3>{home.name}</h3>
      ))}
    </div>
  );
};

export default Test;
