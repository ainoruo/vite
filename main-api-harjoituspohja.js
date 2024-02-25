import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { fetchData } from "./fetch.js";

document.querySelector("#app").innerHTML = "Moi tässä oman APIn harjoituksia";

const bt1 = document.querySelector(".get_users");
bt1.addEventListener("click", getAllUsers);

async function getAllUsers() {
  console.log("toimii!");

  try {
    const response = await fetch("http://127.0.0.1:3000/api/users");
    console.log(response);
    const data = await response.json();
    console.log(data);

    data.forEach((element) => {
      console.log(element.username);
    });

    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';

    data.forEach((element) => {
      console.log(element.username);
      // Assuming there's a table with an ID of 'myTable'
      const table = document.getElementById(".tbody");

      // Create the table row element
      const tr = document.createElement("tr");


      // Create the first cell and add text
      const td1 = document.createElement("td");
      td1.innerText = element.username;

      // Create the second cell and add text
      const td2 = document.createElement("td");
      td2.innerText = element.user_level;

      // Create the third cell and the first button
      const td3 = document.createElement("td");
      const buttonInfo = document.createElement("button");
      buttonInfo.setAttribute("class", "check");
      buttonInfo.setAttribute("data-id", "1");
      buttonInfo.textContent = "Info";
      td3.appendChild(buttonInfo);

      // Create the fourth cell and the second button
      const td4 = document.createElement("td");
      const buttonDel = document.createElement("button");
      buttonDel.setAttribute("class", "del");
      buttonDel.setAttribute("data-id", "1");
      buttonDel.textContent = "Delete";
      td4.appendChild(buttonDel);

      // Create the fifth cell and add text
      const td5 = document.createElement("td");
      td5.innerText = element.user_id;

      // Append all cells to the row
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      // Append the row to the table
      document.querySelector('.tbody').appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
