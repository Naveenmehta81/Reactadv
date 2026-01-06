import React, { useState } from "react";
import './paggin.css'

const Paggin = () => {
  const [currentindex, setCurrentindex] = useState(1);
  const [itemperpage, setPerpage] = useState(5);
  const data = [
    { id: 1, name: " data 1" },
    { id: 2, name: "data  2" },
    { id: 3, name: "data  3" },
    { id: 4, name: "data  4" },
    { id: 5, name: "data  5" },
    { id: 6, name: "data  6" },
    { id: 7, name: "data  7" },
    { id: 8, name: "data  8" },
    { id: 9, name: "data  9" },
    { id: 10, name: "data  10" },
    { id: 11, name: "data  11" },
    { id: 12, name: "data  12" },
    { id: 13, name: "data  13" },
    { id: 14, name: "data  14" },
    { id: 15, name: "data  15" },
    { id: 16, name: "data  16" },
    { id: 17, name: "data  17" },
    { id: 18, name: "v 18" },
    { id: 19, name: "data  19" },
    { id: 20, name: "data  20" },
  ];

  const indexoflast = currentindex * itemperpage;
  const indexoffirst = indexoflast - itemperpage;
  const currentpage = data.slice(indexoffirst, indexoflast);

  function gotonextpage() {
    setCurrentindex((prev) => prev + 1);
  }
  function comeback() {
    setCurrentindex((prev) => prev - 1);
  }

  function specific(event) {
    setCurrentindex(event);
  }

  function paggingcontol() {
    const totalpage = Math.ceil(data.length / itemperpage);
    return (
      <div className="contanier">
        <button onClick={comeback} disabled={currentpage === 1}>
          previous
        </button>
        {Array.from({ length: totalpage }, (_, i) => (
          <button key={i} onClick={() => specific(i + 1)}>
            {i + 1}
          </button>
        ))}

        <button onClick={gotonextpage} disabled={currentpage === totalpage}>
          next
        </button>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {currentpage.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {paggingcontol()}
    </div>
  );
};

export default Paggin;
