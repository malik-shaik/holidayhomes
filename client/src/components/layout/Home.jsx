import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
const Home = () => {
  const [home, setHome] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    async function fetchHome() {
      const url = `http://localhost:5050/home/${id}`;
      const res = await Axios.get(url);
      setHome(res.data);
    }
    fetchHome();
  }, []);

  console.log(home);

  return (
    <>
      {home ? (
        <div>
          <img src={home.images[0].imageLink} alt="img" />
          <h3>{home.name}</h3>
          <p>{home.rent}</p>
          <p>{home.address}</p>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default Home;
