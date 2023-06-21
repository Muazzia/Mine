import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "58c21096114e400c9beebe505fea902a",
  },
});
