let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")


function newCard2 (event) {
    event.preventDefault();
    
    card1.classList.add("disappear");
    card2.classList.remove("disappear");

    

    console.log("deu certo")
}


