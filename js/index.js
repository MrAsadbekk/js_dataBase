const box = document.querySelector(".box__container");
const box2 = document.querySelector(".box__two");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.map((x) => {
      const xFlage = document.createElement("img");
      xFlage.src = x.flags.png;

      const xName = document.createElement("h2");
      xName.textContent = `Countrie: ${x.name.common}`;

      const xCapital = document.createElement("h4");
      xCapital.textContent = `Capital: ${x.capital}`;

      const xPopulation = document.createElement("p");
      // xPopulation.textContent = `Population: ${x.population}`;

      const populationString = String(x.population);
      if (populationString.length > 9) {
        const population1 = populationString.slice(
          0,
          populationString.length - 9
        );
        xPopulation.textContent = `Population: ${population1} mr`;
      } else if (populationString.length > 6) {
        const population2 = populationString.slice(
          0,
          populationString.length - 6
        );
        xPopulation.textContent = `Population: ${population2} ml`;
      } else if (populationString.length > 3) {
        const population3 = populationString.slice(
          0,
          populationString.length - 3
        );
        xPopulation.textContent = `Population: ${population3} k`;
      } else {
        xPopulation.textContent = `Popu;ation: ${x.population}`;
      }

      console.log(x.population);

      const xBox = document.createElement("div");
      xBox.classList.add("countrie__box");

      xBox.appendChild(xFlage);
      xBox.appendChild(xName);
      xBox.appendChild(xCapital);
      xBox.appendChild(xPopulation);

      box.appendChild(xBox);
    });
  })
  .catch((error) => console.log(error.massage));
