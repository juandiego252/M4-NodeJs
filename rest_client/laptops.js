const IP = "192.168.50.210";
const PORT = 3000;
const URL = `http://${IP}:${PORT}/laptops`;

export const getAllLaptos = (fnRefreshList) => {
  console.log("..laptops");
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};

export const saveLaptopRest = (laptop, fnshowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: laptop.id,
      marca: laptop.brand,
      procesador: laptop.processor,
      memoria: laptop.memory,
      disco: laptop.disk,
    }),
  };
  fetch(URL, config)
    .then((response) => response.json())
    .then((body) => {
      fnshowMessage();
      console.log(body);
    });
};

export const updateLaptopRest = (laptop, fnshowMessage) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: laptop.id,
      marca: laptop.marca,
      procesador: laptop.procesador,
      memoria: laptop.memoria,
      disco: laptop.disco,
    }),
  };

  fetch(URL+"/"+laptop.id, config)
    .then((response) => response.json())
    .then((body) => {
      fnshowMessage();
      console.log(body);
    });
};
