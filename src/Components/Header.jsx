import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerCont">
      <div className="start">
        <div>
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Featured
          </p>
        </div>

        <div>
          <p
            onClick={() => {
              navigate("/armoury");
            }}
          >
            Armoury
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              navigate("/aquatic");
            }}
          >
            Aquatics
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              navigate("/cycling/bmx");
            }}
          >
            Cycling
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              navigate("/golf");
            }}
          >
            Golf
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              navigate("/gymnastic");
            }}
          >
            Gymnastics
          </p>
        </div>
      </div>
    </div>
  );
};
