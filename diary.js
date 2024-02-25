export function showEntries(element) {

  async function loadEntries(element) {
    const cardArea = document.querySelector(".card-area");
    cardArea.innerHTML = ""; // Tyhjennä korttialue vanhoista korteista

    try {
      const response = await fetch('http://localhost:3000/api/entries');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const entries = await response.json();

      // Käy läpi kaikki merkinnät ja luo niille kortit
      entries.forEach((entry) => {
        const card = document.createElement("div");
        card.className = "card";

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        // Luodaan kortille kuva (tässä tapauksessa esimerkkikuvaa ei ole, joten käytetään placeholder-kuvaa)
        const cardImg = document.createElement("div");
        cardImg.className = "card-img";
        const img = document.createElement("img");
        img.src = "path-to-your-placeholder-image.jpg"; // Korvaa placeholder oikealla kuvapolulla
        img.alt = "Entry image";
        cardImg.appendChild(img);

        // Luodaan kortille teksti
        const cardText = document.createElement("div");
        cardText.className = "card-text";

        const date = document.createElement("h4");
        date.textContent = new Date(entry.entry_date).toLocaleDateString();
        cardText.appendChild(date);

        const mood = document.createElement("p");
        mood.textContent = `Mood: ${entry.mood}`;
        cardText.appendChild(mood);

        const weight = document.createElement("p");
        weight.textContent = `Weight: ${entry.weight} kg`;
        cardText.appendChild(weight);

        const sleep = document.createElement("p");
        sleep.textContent = `Slept: ${entry.sleep_hours} hours`;
        cardText.appendChild(sleep);

        const notes = document.createElement("p");
        notes.textContent = entry.notes;
        cardText.appendChild(notes);

        // Kootaan kortin osat yhteen
        cardContent.appendChild(cardImg);
        cardContent.appendChild(cardText);
        card.appendChild(cardContent);

        // Lisätään kortti DOMiin
        cardArea.appendChild(card);
      });
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
  element.addEventListener("click", () => loadEntries());
}
