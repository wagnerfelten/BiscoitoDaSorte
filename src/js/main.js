let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")



let phraser = [
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'A juventude não é uma época da vida, é um estado de espírito',

]

let randomPhraser = Math.round(Math.random() * phraser.length);


function newCard2 (event) {
    event.preventDefault();
    
    card1.classList.add("disappear");
    card2.classList.remove("disappear");

    

    console.log(randomPhraser)
}


const reset = () => {
    card2.classList.add("disappear");
    card1.classList.remove("disappear");

    randomPhraser = Math.round(Math.random() * phraser.length);
}