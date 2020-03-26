import axios from "axios";

const url = "https://qcd7aj7lld.execute-api.ap-northeast-1.amazonaws.com/dev/";
const apiKey = "";

export function getApi() {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
