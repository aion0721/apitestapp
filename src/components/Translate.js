import React from "react";
import { translateJaToEn } from "../api/translateApi";

function Translate() {
  const [result, setResult] = React.useState("");
  const input = React.useRef(null);

  const onClick = async () => {
    const response = await translateJaToEn(input.current.value);
    setResult(response.data);
  };
  return (
    <div>
      <input ref={input} />
      <button onClick={onClick}>Jap -> Eng</button>
      <p>Result:{result}</p>
    </div>
  );
}

export default Translate;
