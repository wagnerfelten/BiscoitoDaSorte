let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");

let randomPhraser

randomPhraser = Math.round(Math.random() * 7);

switch (randomPhraser ) {
  case 1:
    document.querySelector(".card2 p").innerText =
      "A vida trará coisas boas se tiver paciência.";
    break;

  case 2:
    document.querySelector(".phrase p").innerText =
      "Defeitos e virtudes são apenas dois lados da mesma moeda.";
    break;

  case 3:
    document.querySelector(".phrase p").innerText =
      "A maior de todas as torres começa no solo.";
    break;

  case 4:
    document.querySelector(".phrase p").innerText =
      "Não há que ser forte. Há que ser flexível";
    break;

  case 5:
    document.querySelector(".phrase p").innerText =
      "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração";
    break;

  case 7:
    document.querySelector(".phrase p").innerText =
      "A juventude não é uma época da vida, é um estado de espírito";
    break;
}

function newCard2(event) {
  event.preventDefault();

  card1.classList.add("disappear");
  card2.classList.remove("disappear");

 
  console.log(randomPhraser);
}

const reset = () => {
  card2.classList.add("disappear");
  card1.classList.remove("disappear");

  window.location.reload(true)

  randomPhraser = Math.round(Math.random() * 6);
};
