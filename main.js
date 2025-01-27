
let player1 = 0
let player2 = 0
let dice1 = document.getElementById("left-img")
let dice2 = document.getElementById("right-img")
let roll_dice = document.getElementById("btn1")
let restart = document.getElementById("btn2")
let score1 = document.getElementById("score-left")
let score2 = document.getElementById("score-right")

roll_dice.addEventListener("click", function() {
    let n1 = Math.floor(Math.random()*6) + 1
    let n2 = Math.floor(Math.random()*6) + 1
    update_img(n1, dice1)
    update_img(n2, dice2)
    checkWinner(n1, n2)
    update_result()
})

function update_img(n, dice) {
    switch (n) {
        case 1:
            dice.setAttribute("src", "images/Dice/1.png")
            break
        case 2:
            dice.setAttribute("src", "images/Dice/2.png")
            break
        case 3:
            dice.setAttribute("src", "images/Dice/3.png")
            break
        case 4:
            dice.setAttribute("src", "images/Dice/4.png")
            break
        case 5:
            dice.setAttribute("src", "images/Dice/5.png")
            break
        case 6:
            dice.setAttribute("src", "images/Dice/6.png")
            break
        default:
            console.log("Invalid grade")
    }
}

function checkWinner(n1, n2) {
    if (n1 == n2) {
        player1++
        player2++
    } else if (n1 > n2) {
        player1++
    } else {
        player2++
    }
}

restart.addEventListener("click", function() {
    player1 = 0
    player2 = 0
    score1.innerText = 0
    score2.innerText = 0
})

function update_result() {
    score1.innerText = player1
    score2.innerText = player2
}
