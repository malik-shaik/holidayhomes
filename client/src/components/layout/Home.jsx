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
    fetchHome(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-6 text-cente">
              {home ? (
                <div>
                  <h3 className="font-weight-light">{home.name}</h3>
<<<<<<< HEAD
                  <div className="d-flex">
                    {home.images.map((image) => (
                      <img
                        className="d-block w-100 mr-3"
                        src={image.imageLink}
                        alt="img"
                      />
                    ))}
                  </div>
=======
                  <img
                    className="d-block w-100 "
                    src={home.images[0].imageLink}
                    alt="img"
                  />
>>>>>>> 0010e7f9ba726c944625165d478abec47dc21321
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
