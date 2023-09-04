"use client";
import React, { useState } from "react";
import styles from "./baha.module.css";
import Cell from "../components/cell";
export default function page() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo]= useState("circle")
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.gameboard}>
          {cells.map((cell, index) => (
            <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells}/>
          ))}
        </div>
      </div>
    </main>
  );
}
