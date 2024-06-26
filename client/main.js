import { xhrPromise } from "./lib/index.js";

async function getData() {
  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')

  console.log(data);
}

getData()
