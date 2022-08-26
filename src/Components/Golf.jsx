import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getTodoFailed, getTodoRequest, getTodoSuccess } from "../Redux/action";

export const Golf = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    const request = getTodoRequest();
    dispatch(request);
    axios
      .get("https://tericsoftassignment.herokuapp.com/golf")
      .then((d) => {
        const success = getTodoSuccess(d.data);
        dispatch(success);
      })
      .catch((err) => {
        const error = getTodoFailed();
        dispatch(error);
      });
  }, []);

  return (
    <div className="cyclingCont">
      <div className="headd">
        <p>BMX</p>
        <p
          onClick={() => {
            navigate("/mountain");
          }}
        >
          Mountain
        </p>
        <p
          onClick={() => {
            navigate("/track");
          }}
        >
          Track
        </p>
      </div>
      {loading && (
        <h1 style={{ textAlign: "center", padding: "10rem" }}>...Loading</h1>
      )}
      {error && (
        <h1 style={{ textAlign: "center", padding: "10rem" }}>...Error</h1>
      )}
      <div className="boxes">
        <div className="box">
          {data.map((data) => (
            <div key={data._id}>
              <img src={data.image} alt="" />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
