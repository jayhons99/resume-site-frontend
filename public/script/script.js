const URL = "https://tiijwog187.execute-api.us-east-1.amazonaws.com/Prod/";

async function getData(url) {
  fetch(url, { method: "GET" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK NOT RESPONDING");
      }
    })
    .then((data) => {
      console.log(data);
      displayCount(data);
    })
    .catch((error) => console.error(`CANNOT FETCH DATA: ${error}`));
}

async function displayCount(data) {
  const num = data.numOfVisits;
  const countDiv = await document.getElementById("count");
  countDiv.innerHTML = num;
}

async function updateCount(url) {
  fetch(url, { method: "POST" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("POST req failed");
      }
    })
    .then((data) => {
      console.log(data);
      getData(url);
    })
    .catch((error) => console.error(`CANNOT UPDATE DATA: ${error}`));
}
window.onload = updateCount(URL);
