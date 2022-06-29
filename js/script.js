const menuCard = document.getElementById("menu-card");

let action = 0;

document
  .getElementById("menu-btn")
  .addEventListener("click", () => {

    if(action === 0) {
        menuCard.style.display="flex";
        action = 1;
    } else {
        menuCard.style.display="none";
        action = 0;
    }
  });
