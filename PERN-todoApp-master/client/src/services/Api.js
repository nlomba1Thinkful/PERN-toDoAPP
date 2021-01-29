// axois Api here
import axois from "axios";

const devURL = "http://localhost:5000/";
const proURL = "https://pern-todo-app-hamed.herokuapp.com/";
let baseURL = "";

if (process.env.NODE_ENV === "production") {
  baseURL = proURL;
} else {
  baseURL = devURL;
}

export default () => {
  return axois.create({
    baseURL: baseURL,
  });
};
