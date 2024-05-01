const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const loader = document.createElement("div");
loader.className = "loader";
const loading = document.createElement("div");
loading.className = "loading";

const apiKey = "CFIRBMeMQDHCpUfe7UvJ6w==btpelL4SAiECCNHq";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?";

async function getJoke() {
  try {
    jokeEl.innerText = "";
    jokeEl.append(loading);
    btnEl.disabled = true;
    btnEl.innerText = "";
    btnEl.append(loader);
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
