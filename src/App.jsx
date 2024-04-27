import { useEffect, useState } from "react";
import "./App.css";

function Ceil({ data, onClick, index, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`h-20 w-20 border border-black m-2 ${
        data == 1 ? "bg-green-500" : ""
      }`}
      onClick={() => {
        onClick(index);
      }}
    ></button>
  );
}

function App() {
  const [box, setBox] = useState([0, 0, 0, 0, 2, 0, 0, 0, 0]);
  const [selected, setSelected] = useState([]);

  const hanldeClick = (i) => {
    let b = [...box];
    b[i] = 1;
    setBox(b);
    let s = [...selected];
    s.push(i);
    setSelected(s);
    checkbox(s);
  };

  const checkbox = (data) => {
    if (data.length == 8) {
      let c = [...box];
      let a = data.length - 1;

      let timer = setInterval(() => {
        c[`${data[a]}`] = 0;
        setBox([...c]);
        a--;
        if (a == -1) {
          clearInterval(timer);
          setSelected([]);
        }
      }, 400);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="grid grid-cols-3">
        {box.map((item, i) => {
          return item != 2 ? (
            <section key={i}>
              <Ceil
                data={item}
                onClick={hanldeClick}
                disabled={item}
                index={i}
              />
            </section>
          ) : (
            <span></span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
