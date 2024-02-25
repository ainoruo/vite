"use strict";
console.log("the script starts");

function synchronousFunction() {
  let number = 1;
  for (let i = 1; i < 100000; i++) {
    number += i;
    console.log("synchronousFunction running");
  }
  console.log("regular function complete", number);
}

function synchronousFunction2() {
  console.log("huh vihdoin täälllä!");
}

//suoritetaan async
function asynchronousFunction() {
  console.log("async haku alkaa");

  //fetch(URL, {options})

  //hetaan ilman async/await rakennetta perinteisesti käyttäen .then notaatiota
  fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      //tee jotain vastaukselle
      console.log('Vastaus:');
      console.log(response);


      //response.ok
      if (!response.ok) {
        throw new Error("Verkkovastaus ei ollut kunnossa");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Fetch-operaatiossa ilmeni ongelma:", error);
    });
}

async function asynchronousFunction2() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');

      //parsee eli muuttaa vastauksen json muotoon. Tämäkin kestää, siksi async
      const data = await response.json();

      console.log(data);
      console.log(data.page);
      console.log(data.total_pages);
      console.log(data.data[0].email);

    } catch (error) {
      console.error('Virhe:', error);
    }
  }

  async function getFromApi() {
    console.log('haen dataa');
    try {
      const response = await fetch('http://127.0.0.1:3000/items');

      //parsee eli muuttaa vastauksen json muotoon. Tämäkin kestää, siksi async
      const vastausdata = await response.json();

      console.log(vastausdata);
    } catch (error) {
      console.error('Virhe:', error);
    }
  }

  async function postToApi() {
    console.log('postaan dataa');

    //fetch(URL, {options})
    try {
      const response = await fetch('http://127.0.0.1:3000/items', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: 'jee uusi nimi',
        }),
      });

      //TODOO virheentarkastus

      //parsee eli muuttaa vastauksen json muotoon. Tämäkin kestää, siksi async
      const vastausdata = await response.json();

      console.log(vastausdata);
    } catch (error) {
      console.error('Virhe:', error);
    }
  }

  asynchronousFunction();
  asynchronousFunction2();

  async function main() {
    try {
        await getFromApi();
        await postToApi();
        await getFromApi();

    } catch (error) {
      console.log('virhe');
    }

  }

  main();
// synchronousFunction();
// synchronousFunction2();
