import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Homes = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    async function fetchAllHomes() {
      const res = await axios.get("http://localhost:5050/home/");
      setHomes(res.data);
    }

    fetchAllHomes();
  }, []);

  return (
    <div>
      All Homes
      {homes.map((home) => (
        <Link key={home._id} to={`/home/${home._id}`}>
          <img src={home.images[0].imageLink} alt="img" />
          <h3>{home.name}</h3>
          <p>{home.rent}</p>
          <p>{home.address}</p>
        </Link>
      ))}
    </div>
  );
};

export default Homes;
