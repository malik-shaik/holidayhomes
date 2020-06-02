import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// uncomment this...

const Home = () => {
  const [home, setHome] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    async function fetchHome() {
      const url = `http://localhost:5050/home/${id}`;
      const res = await Axios.get(url);
      setHome(res.data);
    }
    fetchHome(); // eslint-disable-next-line
  }, []);

  console.log(home);

  return (
    <>
      <div className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-6 text-cente">
              {home ? (
                <div>
                  <h3 className="font-weight-light">{home.name}</h3>
                  <img
                    className="d-block w-100 "
                    src={home.images[0].imageLink}
                    alt="img"
                  />
                  <p className="lead">Rent: {home.rent}</p>
                  <p className="lead">Address: {home.address}</p>
                </div>
              ) : (
                <h2>Loading....</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
