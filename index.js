let score=0
let score2=0
homeButton= document.getElementById("home-score")
guestButton= document.getElementById("guest-score")

function home1(){
    score+=1
    console.log(score)
    homeButton.textContent= score
}

function home2(){
      score+=2
    console.log(score)
    homeButton.textContent= score
}

function home3(){
      score+=3
    console.log(score)
    homeButton.textContent= score
}

function guest1(){
    score2+=1
    console.log(score)
    guestButton.textContent= score2
}

function guest2(){
    score2+=2
    console.log(score)
   guestButton.textContent= score2
}

function guest3(){
    score2+=3
    console.log(score)
  guestButton.textContent= score2
}