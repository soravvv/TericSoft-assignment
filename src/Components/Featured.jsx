import React from "react";
import { useNavigate } from "react-router-dom";

export const Featured = () => {
  const navigate = useNavigate();

  return (
    <div className="mid">
      <div>
        <h1
          onClick={() => {
            navigate("/golf");
          }}
        >
          1. Golf
        </h1>
      </div>
      <div>
        <h1
          onClick={() => {
            navigate("/armoury");
          }}
        >
          2. Armoury
        </h1>
      </div>
      <div>
        <h1
          onClick={() => {
            navigate("/gymnastic");
          }}
        >
          3. Gymnastics
        </h1>
      </div>
    </div>
  );
};
