const URL = "https://tiijwog187.execute-api.us-east-1.amazonaws.com/Prod/";

async function getData(url) {
  const response = await fetch(url);

  const data = response.json();
  console.log(data);
}

getData(URL);
