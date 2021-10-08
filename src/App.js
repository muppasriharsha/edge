import "./App.css";
import Home from "./Pages/Home";
import { useState } from "react";
import CarouselContainer from "./Pages/CarouselContainer";
function App() {
  const [x, setx] = useState(true);
  const carosualHandler = (value) => {
    setx(value);
  };

  return (
    <div className="App">
      {x ? <CarouselContainer hand={carosualHandler} /> : <Home />}
    </div>
  );
}

export default App;
