import React from "react";
import { getApi } from "../api/getApi";

function MyApi() {
  const [result, setResult] = React.useState("");
  const onClick = async () => {
    const response = await getApi();
    setResult(response.data.message);
  };
  return (
    <div>
      <button onClick={onClick}>GetAPI</button>
      <p>Result:{result}</p>
    </div>
  );
}

export default MyApi;
