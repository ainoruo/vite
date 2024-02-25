export function showPics(element) {
  //haetaan kissakuvat json tiedostosta ja muokataan index.html tietoja
  async function modifyHTMLPics() {
    console.log("Haetaan kuvat");
    try {
      const response = await fetch("pics.json");
      if (!response.ok) throw new Error("Huono haku!");
      const images = await response.json();

      console.log(images[1]);
      const alt = images[1].name;
      const figurecap = images[1].description;
      const imagesrc = images[1].address;

      const kuva = document.querySelector("img");
      kuva.src = imagesrc;
      kuva.alt = alt;

      const kuvateksti = document.querySelector("figcaption");
      kuvateksti.innerText = figurecap;
    } catch (error) {
      console.error("Error:", error);
    }
  }


  //versio 2 
  async function createPics() {
    console.log("Luodaan kuvat");
    try {
      const response = await fetch("pics.json");
      if (!response.ok) throw new Error("Huono haku!");
      const images = await response.json();

      console.log(images);

      images.forEach(element => {
        console.log(`Nimi: ${element.name}`);
        
      });




      //luodaan yksi figure
      //haetaan ensim elementti johon halaut että kuvat lisätään
      const cards = document.querySelector('#cards');
      cards.innerHTML = '';

      
      const alt = images[1].name;
      const figurecap = images[1].description;
      const imagesrc = images[1].address;

      //luo uusi figure elementti
      const figure = document.createElement('figure');
      cards.appendChild(figure);

      //luodaan img elementti
      const image = document.createElement('img');
      image.src = imagesrc;
      image.alt = alt;

      figure.appendChild(image);

      //luodaan figcaption elementti
      const figurecaption = document.createElement('figurecaption');
      //luodaan teksti figcaptionin sisälle
      const node = document.createTextNode(figurecap);
      figurecaption.appendChild(node);

      figure.appendChild(figurecaption);

    } catch (error) {
      console.error("Error:", error);
    }
  }

  //versio 3
  async function createPicsLoop() {
    console.log("Luodaan kuvat");
    try {
      const response = await fetch("pics.json");
      if (!response.ok) throw new Error("Huono haku!");
      const images = await response.json();

      console.log(images);
      console.log('tehdään loopissa')

      //luodaan yksi figure
      //haetaan ensim elementti johon halaut että kuvat lisätään
      const cards = document.querySelector('#cards');
      cards.innerHTML = '';

      //loopataan kaikki kissakuvat kerralla
      images.forEach(element => {
        console.log(`Nimi: ${element.name}`);   
      //luo uusi figure elementti
      const figure = document.createElement('figure');
      cards.appendChild(figure);

      //luodaan img elementti
      const image = document.createElement('img');
      image.src = element.address;
      image.alt = element.name;

      figure.appendChild(image);

      //luodaan figcaption elementti
      const figurecaption = document.createElement('figurecaption');
      //luodaan teksti figcaptionin sisälle
      const node = document.createTextNode(element.description);
      figurecaption.appendChild(node);

      figure.appendChild(figurecaption);
      });




    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log(element);
  // element.addEventListener('click', () => modifyHTMLPics());

  element.addEventListener("click", () => createPicsLoop());
}
