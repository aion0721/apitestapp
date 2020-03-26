import axios from "axios";

const url =
  "https://script.google.com/macros/s/AKfycby3NwZhozMWbkS8evh2t3dvfJgKxCBdchI0Xdr31L_BoUb7uqyE/exec";

export function translateJaToEn(text) {
  return axios.get(`${url}?text=${text}&source=ja&target=en`);
}
