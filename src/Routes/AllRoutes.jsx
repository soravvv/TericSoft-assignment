import React from "react";
import { Route, Routes } from "react-router-dom";
import { Aquatics } from "../Components/Aquatics";
import { Armoury } from "../Components/Armoury";
import { Cycling } from "../Components/Cycling";
import { Featured } from "../Components/Featured";
import { Golf } from "../Components/Golf";
import { Gymnastic } from "../Components/Gymnastic";
import { Header } from "../Components/Header";
import { Mountain } from "../Components/Mountain";
import { Track } from "../Components/Track";

export const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cycling/bmx" element={<Cycling />} />
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/track" element={<Track />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/armoury" element={<Armoury />} />
        <Route path="/aquatic" element={<Aquatics />} />
        <Route path="/golf" element={<Golf />} />
        <Route path="/gymnastic" element={<Gymnastic />} />
      </Routes>
    </>
  );
};
