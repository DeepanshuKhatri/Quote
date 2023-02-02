import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [bg, setBackgroundColor] = useState("");

  const colors = ["#00eeee", "#800080", "##ed872d", "##bbff77", "#458b74"];

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  const changeBackgroundColor = () => {
    setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  useEffect(() => getQuote(), []);
  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <span>{quote.content}</span>
      <h4>{quote.author}</h4>
      <button
        onClick={() => {
          getQuote();
          changeBackgroundColor();
        }}
      >
        Get Quote
      </button>
    </div>
  );
}

export default App;
